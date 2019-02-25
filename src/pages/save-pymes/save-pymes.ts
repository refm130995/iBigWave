import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, normalizeURL } from 'ionic-angular';
import { GpsProvider } from '../../providers/gps/gps';
import { UserModel } from '../../models/user.model';
import { FormGroup } from '@angular/forms';
import { UsersModuleProvider } from '../../providers/users-module/users-module';
import { AlertsModuleProvider } from '../../providers/alerts-module/alerts-module';
import { PymesModuleProvider } from '../../providers/pymes-module/pymes-module';
import { shopModel } from '../../models/shop.model';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-save-pymes',
  templateUrl: 'save-pymes.html',
})
export class SavePymesPage {
  country?:any = 'Chile';
  types:string = 'password';
  categories: any = [];
  categoriesCheck: any =[];
  user: UserModel = new UserModel;
  pyme: shopModel = new shopModel;
  public form: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private gps: GpsProvider, 
              private userProvider: UsersModuleProvider, 
              private alert: AlertsModuleProvider,
              private alertCtrl: AlertController,
              private pymeProvider: PymesModuleProvider,
              private actionSheetCtrl: ActionSheetController,
              private imagePicker: ImagePicker,
              private camera: Camera
              ) {
            }

  ionViewDidLoad() {
 
  }

  getCountry(){
    this.country = this.gps.get_address();
  }

  showCheckbox() {
    if(this.categories.length>0){
      this.openCheckbox();
    }else{
      this.getCategories();
    }    
  }

  getCategories() {
    let loading =  this.alert.loading('Cargando...');
    loading.present();
    this.userProvider.getCategories().subscribe(
      data =>      {
        data = JSON.parse(data['_body']);
          this.categories = data['data'];
          loading.dismiss();
          this.openCheckbox();
      },
      error =>  {
        console.log(error)
        loading.dismiss();
        this.alert.alert( "Alerta!", "Ha ocurrido un error al cargar la inforamción.");
      }
    );
  }

  openCheckbox(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Categorias');
    for (var i = 0; i<this.categories.length; i++) {
      this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
      alert.addInput({
        type: 'checkbox',
        label: this.categories[i].attributes.name,
        value: this.categories[i].id,
        checked: this.categories[i].checked
      });
      
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Listo',
      handler: data => {
        this.categoriesCheck=data;
        if (this.categoriesCheck.length>0) {
          this.textCategories()
        }else{
          this.alert.alert( "Alerta!", "No selecciono ninguna categoria");
          this.textCategories()
        }
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

  verificarCheckbox(id){
    if(this.categoriesCheck.length>0){
      for (var i = 0;i<this.categoriesCheck.length; i++) {
        if(this.categoriesCheck[i]==id){
          return true;
        }
      }
    }
    return false;
  }

  textCategories(){
    let text = "";
    for (var i = 0; i < this.categoriesCheck.length; i++) {
      for (var j = 0; j < this.categories.length; j++) {
        if(this.categoriesCheck[i]==this.categories[j].id){
          text=text+"- "+this.categories[j].attributes.name+".\n";
        }
      }
    }
    console.log('Checkbox data:', text);
    //this.form.value.category_ids=text;
     this.userProvider.check_User().then( data => {
      this.pyme.user_id = data;
      console.log('Checkbox data:', this.pyme);
      this.pyme.category_ids = text,
      console.log('Checkbox data:', this.pyme.category_ids);
    } );
  }
  createPyme(){
    let loading = this.alert.loading('Cargando...');
    loading.present();
    this.pyme.category_ids = this.categoriesCheck;
    this.pymeProvider.createPyme(this.pyme).subscribe(
      data =>      {
        data = JSON.parse(data['_body']);
        loading.dismiss();
        this.alert.alert("Enhorabuena!","Profesional Creado Exitosamente");
        this.navCtrl.pop()
      },
      error =>   {
        loading.dismiss();
        console.log(error)
        try{
           //this.messages(error.error.errors.full_messages[0]);
            this.alert.alert("Alerta!","Ha ocurrido un error");
        }catch(err){
            this.alert.alert("Alerta!","Ha ocurrido un error");
        }
      }
    );
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
            this.setImgShop(results[i]);
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
      this.setImgShop(imageData);
    }, (err) => {
     // Handle error
    });
  }
  setImgShop(image){
    image = normalizeURL(image);
    //uploads img to firebase storage
    this.uploadImage(image)
    .then(photoURL => {
        this.pyme.avatar = photoURL;
    })
  }
  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
    this.encodeImageUri(imageURI, function(image64){
      resolve (image64);
    })
  })
}
}
