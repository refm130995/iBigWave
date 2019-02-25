import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AlertsModuleProvider } from '../../providers/alerts-module/alerts-module';
import { IndependientsModuleProvider } from '../../providers/independients-module/independients-module';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { Angular2TokenService } from 'angular2-token';
import { UsersModuleProvider } from '../../providers/users-module/users-module';
import { routes } from '../../providers/routes';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-independients',
  templateUrl: 'independients.html',
})
export class IndependientsPage {
  independients: any = [];
  independientsAll: any =[];
  categories: any = [];
  categoriesCheck: any =[];
  title;
  showSearch=false;
  titleFiltrar="Filtrar";
  imagenBaner;
  imagenLogo;
  searchText;
  user: any;
  followAll;
  buscar;
  constructor(
    public navCtrl: NavController,
  	public navParams: NavParams,
    public loading: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private _tokenService: Angular2TokenService,
    private userProvider: UsersModuleProvider,
    private alert: AlertsModuleProvider,
    private independientsProvider: IndependientsModuleProvider,
    private storage: Storage) {
  }
  slides = [
    {
      title: "Zona de Tiendas",
      description: "Descubre iBigWave",
      smalltext: "Consigue los mejores precios",
      image: "assets/imgs/slider1.jpg"
    }
  ];

  ionViewDidLoad() {
    this.checkUser();
    this.getListIndependients();
  }
  checkUser() {
    this.userProvider.getUser().subscribe( (resp)=> {
      this.user = JSON.parse(resp['_body']).data.attributes;
     },
     error => {
      if(error.status == 401){
        console.log(error);
        this.storage.remove('user');
        this.alert.alert('Alerta!',"Su sesión ha expirado.");
        this.alert.menu('unauthenticated');
        this.user = null;
     }
     }
    )
  }

  getListIndependients(){
  let load =  this.alert.loading('Cargando informacion...');
  load.present();
    this.independientsProvider.getIndependients().subscribe(
      data => {
        load.dismiss();
        data = JSON.parse(data['_body']);
        if (data['data'].length){
          this.independientsAll = data['data'];
          this.independients = this.independientsAll;
          console.log(this.independients)
          if(!this.user){
            this.showFollowing2();
          }else{
            console.log(this.user);
            this.showFollow();
          } 
        }
      },
      error =>  {
      	console.log(error)
        this.alert.alert( "Alerta!", "Ha ocurrido un error al cargar la información.");
      }
    )
  }
  back(){
    this.navCtrl.pop();
  }

showAll(){
  this.independients=this.independientsAll;
}

showFollowProfile(){
  if(!this.user){
    let confirm = this.alertCtrl.create({
      title: 'Seguir Tienda',
      message: 'Para seguir un perfil debes registrarte',
      buttons: [
        {
          text: 'ok',
          handler: () => { 
          }
        },
        {
          text: 'Registrarse',
          handler: () => {
            this.navCtrl.parent.select(2); 
          }
        }
      ]
    });
    confirm.present(); 
  }else{
    if(this.followAll.data.length>0){
      this.independients=this.followAll.data;
    }else{
      this.messagesDuration("Para seguir un perfil haz click en el icono de la mano",5000)
    }      
  }
}

showFollowing(){
  for (var i = 0; i < this.independientsAll.length; i++) {
    if(this.follow(this.independientsAll[i])){
      this.independientsAll[i].followColor="following"
    }else{
      this.independientsAll[i].followColor="icon-seguir"
    }
  }
  this.independients=this.independientsAll;
}

follow(item){
  for (var j = 0; j < this.followAll.data.length; j++) {
    if(item.id==this.followAll.data[j].id){
      return true;
    }
  }
  return false;
}

showFollowing2(){
  for (var i = 0; i < this.independientsAll.length; i++) {
    this.independientsAll[i].followColor="icon-seguir"      
  }
  this.independients=this.independientsAll;
}

showFollow(){
  let loading = this.loading.create({ content: 'Cargando...' });
  loading.present();
    this.independientsProvider.getFollowing().subscribe(
    data => {
      loading.dismiss();
      console.log(data)
      this.followAll = JSON.parse(data['_body']);
      console.log(this.followAll);        
      for (var i = 0; i < this.followAll.data.length; i++) {
        this.followAll.data[i].followColor="following";  
      }
      this.showFollowing();
    },
    error =>  {
      console.log(error)
      loading.dismiss();
      this.messages("Ha ocurrido un error al cargar la inforamción.");
    }
  );
}

seguir( id: any, index: string | number, name: string ){
  if(!this.user){
    let confirm = this.alertCtrl.create({
      title: 'Seguir Tienda',
      message: 'Para seguir un perfil debes registrarte',
      buttons: [
        {
          text: 'ok',
          handler: () => { 
          }
        },
        {
          text: 'Registrarse',
          handler: () => {
            this.navCtrl.parent.select(2); 
          }
        }
      ]
    });
    confirm.present(); 
  }else{
    let options;
    if(this.independients[index].followColor=="icon-seguir"){
      options={
        url: routes.follow("independents",id),
        icon:"following"
      };
      let loading = this.loading.create({ content: 'Cargando...' });
            loading.present();
              this._tokenService.get(options.url).subscribe(
                data => {
                  loading.dismiss();
                  console.log(data)
                  data = JSON.parse(data['_body']);
                  console.log(data)
                  this.independients[index].followColor=options.icon;
                  this.changeFoller(id,options.icon);
                  this.followAll.data.push(this.independients[index]);
                },
                error =>  {
                  console.log(error)
                  loading.dismiss();
                  this.messages("Ha ocurrido un error al cargar la inforamción.");
                }
              );
    }else{
      options={
        pregunta:'¿Quieres dejar de seguir a '+ name +'?',
        url: routes.unfollow("independents",id),
        icon:"icon-seguir"
      };
      let confirm = this.alertCtrl.create({
        message: options.pregunta,
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('no');
            }
          },
          {
            text: 'Si',
            handler: () => {
              let loading = this.loading.create({ content: 'Cargando...' });
              loading.present();
              let info={
                  unfollow:{
                    profile_id:id
                  }
                }
                this._tokenService.post(options.url,info).subscribe(
                  data => {
                    loading.dismiss();
                    console.log(data)
                    data = JSON.parse(data['_body']);
                    console.log(data)
                    this.independients[index].followColor=options.icon;
                    this.deleteFollew(id);
                    this.changeFoller(id,options.icon);
                  },
                  error =>  {
                    console.log(error)
                    loading.dismiss();
                    this.messages("Ha ocurrido un error al cargar la inforamción.");
                  }
                );            
            }
          }
        ]
      });
      confirm.present();
    }
    console.log(id,index);      
  }         
}

deleteFollew(id){
  console.log(id, this.followAll);
  for (var i = 0; i < this.followAll.data.length; i++) {
    if (this.followAll.data[i].id==id) {
      this.followAll.data.splice(i, 1);
      for ( i = 0; i < this.independientsAll.length; i++) {
        if(this.follow(this.independientsAll[i])){
          this.independientsAll[i].followColor="following"
        }else{
          this.independientsAll[i].followColor="icon-seguir"
        }
      }
      return;
    }
  }    
}

changeFoller(id,icon){
  for (var i = 0; i <this.independientsAll.length; i++) {
    if(this.independientsAll[i].id==id){
      this.independientsAll[i].folloColor=icon;
      return;
    }
  }
}

getItems(searchbar) {
  this.independients=this.independientsAll;
  var q = this.buscar;

  if (!q) {
    return;
  }

  this.independients = this.independientsAll.filter((v) => {
    if(v.attributes.name && q) {
      if (v.attributes.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
}

goShowSearch(){
  this.showSearch=true;
  this.titleFiltrar="";
}

showCheckbox() {
  if(this.categories.length>0){
    this.configCheckbox();
  }else{
    this.getCategories();
  }    
  
}

configCheckbox(){
  let alert = this.alertCtrl.create();
  alert.setTitle('Categorias');
  for (var i = 0; i<this.categories.length; i++) {
    this.categories[i].checked=this.verificarCheckbox(this.categories[i].id);
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
        this.filtrarCategories();
      }else{
        this.messages("No selecciono ninguna categoria");
        let item=[];
        this.independients=item;
        this.configCheckbox();
        //this.filtrarCategories();
      }
      console.log('Checkbox data:', data);
    }
  });
  alert.present();
}

filtrarCategories(){
  let item=[];
  for (var i = 0;i<this.independientsAll.length; i++) {
    if (this.independientsAll[i].attributes.categories.length>0) {
      if(this.incluirCategories(i)){
        item.push(this.independientsAll[i]);
      }else{
        console.log("Categorias: "+this.independientsAll[i].attributes.categories);
      }
    }else{
      console.log("no");
    }
  }
  this.independients=item;
  if(this.independients.length<1){
    this.messages("No hay perfiles "+this.title+" para las categorias seleccionadas")
  }
}

incluirCategories(i){
  let categories=this.independientsAll[i].attributes.categories;
  for (var j = 0;j<categories.length; j++) {
    for (var k = 0;k<this.categoriesCheck.length; k++) {
      if(categories[j].id==this.categoriesCheck[k]){
        return true;
      }
    }
  }
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


getCategories(){
  let loading = this.loading.create({ content: 'Cargando...' });
  loading.present();
  let url = routes.categories();
  this._tokenService.get(url).subscribe(
    data =>      {
      loading.dismiss();
      console.log(data)
      data = JSON.parse(data['_body']);
      if (data['data'].length){
        this.categories = data['data'];
        console.log(this.categories);
        this.configCheckbox();
      }
    },
    error =>  {
      console.log(error)
      loading.dismiss();
      this.messages("Ha ocurrido un error al cargar la inforamción.");
    }
  );
}

messages(message){
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000,
    position: 'top'
  });
  toast.present()
}

messagesDuration(message: string,duration: number){
  let toast = this.toastCtrl.create({
    message: message,
    duration: duration,
    position: 'top'
  });
  toast.present()
}
goProfile(profile){
  console.log(profile)
  this.navCtrl.push(ItemdetailPage,{
    profile:profile,
    type:"independients"
  })
}
}
