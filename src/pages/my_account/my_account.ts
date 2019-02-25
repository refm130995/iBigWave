import { Component } from '@angular/core';
import { NavController, ModalController, normalizeURL, ActionSheetController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { UsersModuleProvider } from '../../providers/users-module/users-module';
import { AlertsModuleProvider } from '../../providers/alerts-module/alerts-module';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'page-my_account ',
  templateUrl: 'my_account.html'
})
export class My_accountPage {
  account: string = "profile";
  user: any = [];
  actPhone: string;
  form: FormGroup;
  constructor(public navCtrl: NavController,
             public modalCtrl: ModalController, 
             private userProvider: UsersModuleProvider, 
             private alert: AlertsModuleProvider, 
             private storage: Storage, 
             private imagePicker: ImagePicker, 
             private actionSheetCtrl: ActionSheetController, 
             private camera: Camera, 
             public fb: FormBuilder) {
    this.initForm();
  }
  ionViewDidLoad(){
    this.getUser();
  }
  
    searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
  
    cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
  getUser() {
    let loading = this.alert.loading('Consultando informacion...');
    loading.present();
    this.userProvider.getUser().subscribe( (resp)=> {
     loading.dismiss();
     this.user = JSON.parse(resp['_body']).data.attributes;
     console.log(this.user);
      if(!this.user.birth_date) {
        this.user.birth_date = 'N/A';
      }
      if(!this.user.gender) {
        this.user.gender = 'Sin especificar';
      }
      if(!this.user.phone) {
        this.user.phone = 'N/A';
        this.actPhone = 'N/A';
      }
      if(!this.user.avatar['url']){
        this.user.avatar = false;
      }else{
        this.user.avatar = this.user.avatar['url'];
      }
    },
    error =>{
      loading.dismiss();
      if(error.status == 401){
            this.storage.remove('user');
            this.navCtrl.setRoot(HomePage);
            this.alert.alert('Alerta!',"Su sesión ha expirado.");
            this.alert.menu('unauthenticated');
            loading.dismiss();
        
         }
    })
  }
  openOptions() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Seleccionar imagen',
      buttons: [
        {
          text: 'Cargar de galeria',
          handler: () => {
            this.openImagePicker();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.openCamera();
            //this.getPicture()
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  saveProfile() {
    let loading = this.alert.loading('Guardando...');
    loading.present();

    let user = {
      avatar: this.user.avatar,
      gender: 'Male',
      birth_date: this.user.birth_date,
      current_password: this.user.password,
      email: this.user.email,
      name: this.user.name,
      nickname: this.user.nickname,
      password: this.user.password,
      password_confirm: this.user.password,
    }
    this.userProvider.saveProfile(user).subscribe(
      data =>      {
       loading.dismiss();
       this.alert.alert('Alerta!', 'Perfil Actualizado');
       this.user.password = '';
       this.getUser();
      },
      error => {
        console.log(error)
        loading.dismiss();
      });
  }
  savePassword() {
    let loading = this.alert.loading('Guardando...');
    loading.present();

    let user = {
      current_password: this.user.password,
      password: this.user.newPassword,
      password_confirm: this.user.newPasswordConfirm,
    }
    this.userProvider.saveProfile(user).subscribe(
      () =>      {
       loading.dismiss();
       this.user.password = '';
       this.user.newPassword = '';
       this.user.newPasswordConfirm = '';
       this.alert.alert('Alerta!', 'Contraseña Actualizada');
       this.getUser();
      },
      error => {
        console.log(error)
        loading.dismiss();
      });
  }
  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  }
  openImagePicker(){
    this.imagePicker.hasReadPermission()
    .then((result) => {
      if(result == false){
         this.imagePicker.requestReadPermission();
      }
      else if(result == true){
        this.imagePicker.getPictures({
          maximumImagesCount: 1
        })
        .then((results) => {
          for (var i = 0; i < results.length; i++) {
            this.setImgProfile(results[i]);
          }
        }, (err) => console.log(err));
      }
    }, (err) => {
      console.log(err);
    });
  }
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.setImgProfile(imageData);
    }, (err) => {
     // Handle error
    });
  }
  setImgProfile(image){
    image = normalizeURL(image);
    //uploads img to firebase storage
    this.uploadImage(image)
    .then(photoURL => {
        this.user.avatar = {
          url : photoURL
        }
    })
  }
  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
    this.encodeImageUri(imageURI, function(image64){
      resolve (image64);
    })
  })
}
initForm() {
  this.form = this.fb.group({
    email: [this.user.email, Validators.compose([
        Validators.required,
        Validators.email,
    ])],
    name: [this.user.name, Validators.required],
    nickname: [this.user.nickname, Validators.required],
      password:  ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(8),
    ])],
      password_confirm:  ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(8),
    ])],
      current_password:  ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(8),
    ])],
    // image: ['', Validators.required],
  }); 
}
}
