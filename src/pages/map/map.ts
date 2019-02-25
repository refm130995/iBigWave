import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Events, NavParams, Platform, ToastController, ActionSheetController, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { Angular2TokenService } from 'angular2-token';
import { FiltersModuleProvider } from '../../providers/filters-module/filters-module';
import { CartPage } from '../cart/cart';
import { routes } from '../../providers/routes';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { iconsMaps, icons } from './marks/icons';


declare var google;
let infowindow: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  detail: any;
  detail2: any;
  detail3: any;
  profile: any;
  sucursal: any;
  sucursalAll: any;
  profiles: any;
  newcategories: any = [];
  categories: any;
  user: any;
  lat: any = 0;
  lng: any = 0;
  window: any = false;
  window2: any = false;
  window3:any = true;
  showWindow: any=['primary','',''];
  q: any = "";
  buscar="";
  buscar2="";
  buscarActivo="";
  productsAll: any =[];
  productsAll2: any =[];
  productsAll3: any =[];
  followAll: any ={pymes:[],sellers:[],independents:[]}
  wishList: any =[];
  imagenBaner;
  imagenLogo;
  profilesFilterAll: any = ["Pyme","Independent","Seller"];
  profilesFilter: any = ["Pyme","Independent","Seller"];
  radioZoom=2;
  zoom=14;
  zoomM=14;
  filter = {
    show: false,
    icon: "funnel"
  }
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  @ViewChild('pac') inputElement: ElementRef;
  country?:any = 'Chile';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public platform: Platform,
    public storage: Storage,
    public geo: Geolocation,
    private loading: LoadingController,
    private _tokenService: Angular2TokenService,    
    public events: Events,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public bigwaveProvider: FiltersModuleProvider,
    public modalCtrl: ModalController
  ) {
    platform.ready().then(() => {

    });

    this.newcategories = [];
    this.sucursal = [];
    this.sucursalAll = [];
    this.window = false;
    this.events.subscribe("userLogin", (user) => {
      this.user = user;
      if(this.user!=null){
        this.showFollow("pymes");
        this.showFollow("sellers");
        this.showFollow("independents");
        this.listWish();
      }
      console.log("events in perfil", this.user);
    });
    this.checkLogin();
    //this.loading2 = this.loading.create({ content: 'Cargando...' });
  } 

  ionViewDidLoad() {    //this.loadMap();    
    //this.loading2.present();
    this.miPosition();
    this.getCategories();
    console.log('ionViewDidLoad NearbyPage');    
    //this.loading2.dismiss();
  }

  presentModal(product) {
    const modal = this.modalCtrl.create(CartPage,{product:product});
    modal.onDidDismiss(data => {
     console.log(data);
   });
    modal.present();
  }

  getIdProfile(product){
    for (var i = 0; i < this.sucursalAll.length; i++) {
      for (var j = 0; j < this.sucursalAll[i].profiles.length; j++) {
        var id=this.sucursalAll[i].profiles[j].id;
        for (var k = 0; k < this.sucursalAll[i].profiles[j].products.length; k++) {
          if(this.sucursalAll[i].profiles[j].products[k].id==product.id){
            return id;
          }
        }
      }
    }
  }

  addProduct(product){
    console.log(product);
    if(this.user==null){
      let confirm = this.alertCtrl.create({
        title: 'Crear Tienda',
        message: 'Para agregar a Deseos un producto debes registrarte',
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
      let loading = this.loading.create({ content: 'Cargando...' });
      loading.present();
      console.log(product);
      product.attributes=product;
      var type = product.type_profile.toLowerCase()+"s";
      var id=this.getIdProfile(product);
      var url=routes.getProducts(type,id,product.id)
      this._tokenService.get(url).subscribe(
        data => {
         loading.dismiss(); 
          console.log(data)
          var pr: any;
          pr = JSON.parse(data['_body']);
         /*  console.log(data) */
          this.presentModal(pr.data)
          console.log(pr.data)
        /* if()
   */      },
        error =>  {
          console.log(error)
          loading.dismiss();
          this.messages("Ha ocurrido un error al cargar la inforamción.");
        }
      ); 
    }       
  }

  goMapa(){
    console.log("ver");
  }

  goProduct(product){
    console.log(product)
    product.attributes=product;
    this.navCtrl.push(ItemdetailPage,{
      product:product
    })
  }

  goProfile(profile,type){
    console.log(profile)
    profile.attributes=profile;
    this.navCtrl.push(ItemdetailPage,{
      profile:profile,
      type:type
    })
  }

  addWish(item){
    console.log(item)
    //this.wishSelect = item;
    let params ={
      wish :{
        name: item.name,
        description: "description",
        budget: item.price,
        wisheable_id: item.id,
        wisheable_type: "products"
      }
    }
    //let wishId = params.wish;
    console.log(item)
      if(this.user==null){
        let confirm = this.alertCtrl.create({
          title: 'Crear Tienda',
          message: 'Para agregar a Deseos un producto debes registrarte',
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
        var idWish=this.deleteWish(item);
        let options;
        if(item.followColor=="icon-seguir"){
          options={
            url: routes.createWish(),
            wish:true,
            icon:"icon-seguir2",
            service:true
          };
          let loading = this.loading.create({ content: 'Cargando...' });
                loading.present();
                console.log(params)
                  this._tokenService.post(options.url, params).subscribe(
                    data => {
                      console.log(data)
                      data = JSON.parse(data['_body']);
                      console.log(data)
                      item.followColor=options.icon;                                           
                        this.events.publish("updateWish", true);
                      this.listWish();
                      loading.dismiss();
                    },
                    error =>  {
                      console.log(error)
                      loading.dismiss();
                      this.messages("Ha ocurrido un error al cargar la información.");
                    }
                  );
        }else{
          options={
            pregunta:'¿Quieres eliminar este articulo de tus Deseos?',
            url: routes.deleteWish(idWish),
            wish:false,
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
                  console.log(params)
              
                    this._tokenService.delete(options.url).subscribe(
                      data => {
                        console.log(data)
                        data = JSON.parse(data['_body']);
                        console.log(data)
                        item.followColor=options.icon;                     
                        this.events.publish("updateWish", true);
                        this.listWish();
                        loading.dismiss();
                      },
                      error =>  {
                        console.log(error)
                        loading.dismiss();
                        this.messages("Ha ocurrido un error al cargar la información.");
                      }
                    );
                }
              }
            ]
          });
          confirm.present();
        }
        
      } 
  }

  deleteWish(item){
    for (var i = 0; i < this.wishList.length; i++) {
      if(item.id==this.wishList[i].attributes.wisheable.id){
        return this.wishList[i].id;
      }
    }
  }

  listWish(){
    //console.log(this.products)
    this._tokenService.get(routes.listWish()).subscribe(
      data => {
     /*    loading.dismiss(); */
    /*     console.log(data) */
        data = JSON.parse(data['_body']);
       /*  console.log(data) */
      this.wishList = data;
      this.wishList = this.wishList.data
      /*for(var i=0; i<this.wishList.length; i++){
        this.wishListAll[i]=this.wishList[i].attributes
      }
      this.wishList = this.wishListAll;

      for(i=0; i<this.products.length;i++){
        let list = this.products[i];
        for(var j=0;j<this.wishListAll.length;j++){
          if(list.name == this.wishListAll[j].name){
             this.products[i].wish = true;
          }
        }
      }*/

      console.log(this.wishList)
      /* if()
 */      },
      error =>  {
        console.log(error)
      /*   loading.dismiss(); */
        this.messages("Ha ocurrido un error al cargar la inforamción.");
      }
    );
  }

  wish(item){
    for (var j = 0; j < this.wishList.length; j++) {
      if(item.id==this.wishList[j].attributes.wisheable.id){
        return true;
      }
    }
    return false;
  }

  checkLogin() {
    this.storage.get('user').then((user) => {
      if (user) {
        this.user = JSON.parse(user);
        this.showFollow("pymes");
        this.showFollow("sellers");
        this.showFollow("independents");
        this.listWish(); 
      }else{
        this.user=null; 
      }
    });//storage user
  }

  follow(item){
    var type = item.type_profile.toLowerCase()+"s";
    console.log(type)
    for (var j = 0; j < this.followAll[type].length; j++) {
      if(item.id==this.followAll[type][j].id){
        return true;
      }
    }
    return false;
  }
  
  showFollow(profile){
    /*let loading = this.loading.create({ content: 'Cargando...' });
    loading.present();*/
    let url = routes.following(profile);
    this._tokenService.get(url).subscribe(
      data => {
        //loading.dismiss();
        console.log(data)
        this.followAll[profile] = JSON.parse(data['_body']).data;
        console.log(this.followAll[profile]);        
        for (var i = 0; i < this.followAll[profile].length; i++) {
          this.followAll[profile][i].followColor="icon-seguir2"      
        }
        //this.showFollowing();
      },
      error =>  {
        console.log(error)
        //loading.dismiss();
        this.messages("Ha ocurrido un error al cargar la información.");
      }
    );
  }

  deleteFollew(id,type){
    for (var i = 0; i < this.followAll[type].length; i++) {
      if (this.followAll[type][i].id==id) {
        this.followAll[type].splice(i, 1);
        return;
      }
    }
  }

  seguir(profile){
    console.log(profile);
    if(this.user==null){
      let confirm = this.alertCtrl.create({
        title: 'Crear Tienda',
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
      var type = profile.type_profile.toLowerCase()+"s";
      if(profile.followColor=="icon-seguir"){
        options={
          url: routes.follow(type,profile.id),
          icon:"icon-seguir2"
        };
        let loading = this.loading.create({ content: 'Cargando...' });
              loading.present();
                this._tokenService.get(options.url).subscribe(
                  data => {
                    loading.dismiss();
                    console.log(data)
                    data = JSON.parse(data['_body']);
                    console.log(data)
                    profile.followColor=options.icon;
                    this.followAll[type].push(profile);
                    //this.changeFoller(profile.id,options.icon);
                  },
                  error =>  {
                    console.log(error)
                    loading.dismiss();
                    this.messages("Ha ocurrido un error al cargar la inforamción.");
                  }
                );
      }else{
        options={
          pregunta:'¿Quieres dejar de seguir a '+profile.title+'?',
          url: routes.unfollow(type,profile.id),
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
                      profile_id:profile.id
                    }
                  }
                  this._tokenService.post(options.url,info).subscribe(
                    data => {
                      loading.dismiss();
                      console.log(data)
                      data = JSON.parse(data['_body']);
                      console.log(data)
                      profile.followColor=options.icon;
                      this.deleteFollew(profile.id,type);
                      //this.changeFoller(profile.id,options.icon);
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
    } 
  }

  ordenar(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ordenar productos',
      buttons: [
        {
          text: 'Menor a mayor precio',
          handler: () => {
            this.productsAll3= this.menorMayor(this.productsAll3);
            this.getItems(this.buscar2);
          }
        },
        {
          text: 'Mayor a menor precio',
          handler: () => {
            this.productsAll3= this.mayorMenor(this.productsAll3);
            this.getItems(this.buscar2);
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

  menorMayor(poductos3){
    var productos=[];
    while(poductos3.length>1){
      var prod={
        precio:poductos3[0].price,
        position:0
      }
      for (var i = 1; i < poductos3.length; i++) {
        if(prod.precio>poductos3[i].price){
          prod={
            precio:poductos3[i].price,
            position:i
          }
        }
      }
      console.log(prod);
      productos.push(poductos3[prod.position]);
      poductos3.splice(prod.position,1)
    }
    productos.push(poductos3[0]);
    return productos;
  }

  mayorMenor(poductos3){
    var productos=[];
    while(poductos3.length>1){
      var prod={
        precio:poductos3[0].price,
        position:0
      }
      for (var i = 1; i < poductos3.length; i++) {
        if(prod.precio<poductos3[i].price){
          prod={
            precio:poductos3[i].price,
            position:i
          }
        }
      }
      console.log(prod);
      productos.push(poductos3[prod.position]);
      poductos3.splice(prod.position,1)
    }
    productos.push(poductos3[0]);
    return productos;
  }

  getItems(searchbar) {
    this.detail2=this.detail3;
    this.productsAll2=this.productsAll3;
    var q = this.buscar2;

    if (!q) {
      return;
    }

    this.detail2 = this.detail3.filter((v) => {
      if(v.title && q) {
        if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    this.productsAll2 = this.productsAll3.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  address(){
    var autocomplete = new google.maps.places.Autocomplete(this.inputElement.nativeElement,{type:["address"]});
    autocomplete.bindTo('bounds', this.map);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: this.map,
          anchorPoint: new google.maps.Point(0, -29)
        });
        var th=this;
        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          //marker.setVisible(false);
          console.log(autocomplete.getPlace().formatted_address)
          var place = autocomplete.getPlace().formatted_address;
          let loading = th.loading.create({ content: 'Cargando...' });
            loading.present();
            var data={
              title:place
            }
            th.bigwaveProvider.direccion(data).subscribe(
              response => {
                loading.dismiss(); 
                console.log(response.body.results[0].geometry.location)
                th.lat = response.body.results[0].geometry.location.lat;
                 th.lng = response.body.results[0].geometry.location.lng;
                 th.filtrarCategories();
               },
               error => {
                loading.dismiss();
                th.messages("Dirección no encontrada");
                console.log(error);
              })
        })



    
  }


  showSpandir(){
    this.window2=true;
  }

  changeShowWindow(item){
    this.showWindow=['','',''];
    this.showWindow[item]='primary';
  }

  getCategories() {
    this.storage.get('user').then((user) => {
      this.user = user;
      /*     if (this.user) { */
      this.storage.get('headers').then((data) => {
        let url = routes.categoriesFilter();
        this._tokenService.get(url, data).subscribe(
          response => {

            /*  let id = response['data'].id; */
            /*  this.user.id = id; */
            var token, uid, client;
            client = response['headers'].get('client');
            uid = response['headers'].get('uid');
            token = response['headers'].get('access-token');
            this.categories = JSON.parse(response['_body']);
            console.log(this.categories)
            /*        this.categories = this.categories; */
            for (var i in this.categories.data) {
              this.newcategories[i] = this.categories.data[i].id;
            }
            this.categories = this.categories.data;
            let header = {
              token: token,
              client: client,
              uid: uid
            }
            this.storage.set('headers', header);
          },
          error => {
            console.log(error);
          })
      })
    })
  }

  onInput() {
    for (var i in this.categories) {
      this.newcategories[i] = this.categories[i].id;
    }
    this.profilesFilter=this.profilesFilterAll;
    console.log(this.buscar);
    this.buscarActivo=this.buscar;
    this.filtrarCategories();
  }

  onClose(){
    this.buscar="";
    this.onInput();
  }

  showFilter1(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Perfiles');
    alert.addInput({
        type: 'checkbox',
        label: "Ver Pymes",
        value: "Pyme",
        checked: this.showFilterProfile("Pyme")
      }); 
    alert.addInput({
        type: 'checkbox',
        label: "Ver Independents",
        value: "Independent",
        checked: this.showFilterProfile("Independent")
      }); 
    alert.addInput({
        type: 'checkbox',
        label: "Ver Sellers",
        value: "Seller",
        checked: this.showFilterProfile("Seller")
      }); 

    alert.addButton({
      text: 'Listo',
      handler: data => {
        this.profilesFilter=data;
        if (this.profilesFilter.length>0) {
          this.filtrarProfiles();
          this.initMap();
          this.createmarkers();
        }else{
          this.filtrarProfiles();
          this.initMap();
          this.createmarkers();
          this.messages("No selecciono ninguna categoria");
          //this.filtrarCategories();
        }
        console.log('Checkbox data:', data);
      }
    });alert.addButton({
      text: 'Desmarcar Todo',
      handler: data => {
        this.profilesFilter=[];
        this.showFilter1();
        console.log('Checkbox data:', data);
      }
    });
    alert.addButton({
      text: 'Marcar Todo',
      handler: data => {
        this.profilesFilter=this.profilesFilterAll;
        this.showFilter1();
        console.log('Checkbox data:', this.newcategories);
      }
    });
    alert.addButton('Cancelar');
    alert.present();
  }

  showFilterProfile(item){
    for (var j = 0; j < this.profilesFilter.length; j++) {  
      if(item==this.profilesFilter[j]){
        return true;
      }
    }
    return false;
  }

  filtrarProfiles(){
    let profile=[];
    for (var i = 0; i < this.sucursal.length; i++) {
      var suc={
                latitude: this.sucursal[i].latitude,
                longitude: this.sucursal[i].longitude,
                profiles:[]
              }
      var tiene=false;
      for (var k = 0; k < this.sucursal[i].profiles.length; k++) {
        for (var j = 0; j < this.profilesFilter.length; j++) {        
          if(this.sucursal[i].profiles[k].type_profile==this.profilesFilter[j]){
            tiene=true;
            suc.profiles.push(this.sucursal[i].profiles[k]);
          }
        }
      }
      if (tiene) {
        profile.push(suc);
      }
    }
    this.sucursalAll=[];
    if(profile.length>0){
      for (var i = 0; i < profile.length; i++) {
        this.sucursalAll.push(profile[i]);
      }
    }else{
      this.messages("No hay perfiles con las caracteristicas especificadas");
    }    
  }

  showFilter2(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Categorias');
    console.log(this.categories);
    for (var i = 0; i<this.categories.length; i++) {
      this.categories[i].checked=this.verificarCheckbox(this.categories[i].id);
      alert.addInput({
        type: 'checkbox',
        label: this.categories[i].attributes.name,
        value: this.categories[i].id,
        checked: this.categories[i].checked
      });      
    }

    alert.addButton({
      text: 'Listo',
      handler: data => {
        this.newcategories=data;
        if (this.newcategories.length>0) {
          this.filtrarCategories();
        }else{
          this.messages("No selecciono ninguna categoria");
          //this.filtrarCategories();
        }
        console.log('Checkbox data:', data);
      }
    });
    alert.addButton({
      text: 'Desmarcar Todo',
      handler: data => {
        this.newcategories=[];
        this.showFilter2();
        console.log('Checkbox data:', data);
      }
    });
    alert.addButton({
      text: 'Marcar Todo',
      handler: data => {
        for (var i in this.categories) {
          this.newcategories[i] = this.categories[i].id;
        }
        this.showFilter2();
        console.log('Checkbox data:', this.newcategories);
      }
    });
    alert.addButton('Cancelar');
    alert.present();
  }

  filtrarCategories(){
    let loading = this.loading.create({ content: 'Cargando...' });
    loading.present();
        this.bigwaveProvider.geololization(this.lat, this.lng, this.newcategories, this.buscarActivo,this.radioZoom).subscribe(
        response => {
          console.log(response)
          this.sucursal = JSON.parse(response['_body']);
          this.zoomM=this.zoom;
          console.log(this.sucursal)
          if(this.sucursal.length>0){
            for (var i = 0; i < this.sucursal.length; i++) {
             let profiles = this.sucursal[i].profiles;
             for(var j = 0; j < profiles.length ; j++){
              profiles[j] = profiles[j];
              profiles[j] = profiles[j][0];
             }
              let sucursal = {
                latitude: this.sucursal[i].latitude,
                longitude: this.sucursal[i].longitude,
               profiles : profiles
              }
            this.sucursal[i] = sucursal;
            }
            this.filtrarProfiles();
            console.log(this.sucursal)
            this.initMap();
            this.createmarkers();   
            loading.dismiss();  
          }else{
            loading.dismiss();
            this.initMap();
            this.messages("No hay perfiles con las caracteristicas especificadas");
          }          
        },
        error => {
          loading.dismiss();
          this.messages("Ha ocurrido un error al cargar la información");
          console.log(error);
        })
  }

  verificarCheckbox(id){
    if(this.newcategories.length>0){
      for (var i = 0;i<this.newcategories.length; i++) {
        if(this.newcategories[i]==id){
          return true;
        }
      }
    }
    return false;
  }

  miPosition() {
    this.geo.getCurrentPosition().then(pos => {
      this.lat = 11.68501858908447;
      this.lng = -70.17362594604492;
      this.filtrarCategories();

    }).catch(err => {
      this.initMap();
      this.messages("GPS no activado")
    });
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: this.zoomM,
      center: { lat: this.lat, lng: this.lng },
      disableDefaultUI: true
    });
    this.window = false;
    this.directionsDisplay.setMap(this.map);
    this.createMarkerUser();
    /*  this.createmarkers(); */
    infowindow = new google.maps.InfoWindow();
    var prueba = this;
    this.map.addListener('click', e => {
      var coor = e.latLng + "";
      coor = coor.substring(1, coor.length - 1)
      var lat = coor.split(", ", 2)
      console.log("coordenadas: " + e.latLng);
      console.log("coordenadas: " + coor);
      console.log(+lat[0]);
      console.log(+lat[1]);
      prueba.lat = +lat[0];
      prueba.lng = +lat[1];
      this.filtrarCategories();
    });
    this.map.addListener('zoom_changed', e => {
      console.log(e)
     this.zoom = this.map.getZoom();
      console.log(this.zoom );
      this.zoomMap(this.zoom);
      
    }); 
    this.address();
    var circle = new google.maps.Circle({ 
      map: this.map, 
      radius: (this.radioZoom*1100), 
      fillColor: '#3f51b5', 
      center: { lat: this.lat, lng: this.lng }, 
      clickeable: true,
      strokeColor: '#000000',
      strokeOpacity: 0.5,
      strokeWeight: 1,
      fillOpacity: 0.1
    });
    google.maps.event.addListener(circle, 'click', function (ev) {
        console.log(ev);
        circle.setMap(null);
    });

  }

  cargarZoom(item){
    if(item<this.zoomM){
        this.zoomM=item;
        this.filtrarCategories();
      } 
  }

  zoomMap(item){
    if (item==16) {
      this.radioZoom=1;
      this.cargarZoom(item);
    }else if (item==15) {
      this.radioZoom=2;
      this.cargarZoom(item);
    }else if (item==14) {
      this.radioZoom=2;
      this.cargarZoom(item);
    }else if (item==13) {
      this.radioZoom=4;
      this.cargarZoom(item);
    }else if (item==12) {
      this.radioZoom=7;
      this.cargarZoom(item);
    }else if (item==11) {
      this.radioZoom=13;
      this.cargarZoom(item);
    }else if (item==10) {
      this.radioZoom=25;
      this.cargarZoom(item);    
    }else if (item==9) {
      this.radioZoom=40;
      this.cargarZoom(item);
    }else if (item==8) {
      this.radioZoom=76;
      this.cargarZoom(item);
    }else if (item==7) {
      this.radioZoom=150;
      this.cargarZoom(item);
    }else if (item==6) {
      this.radioZoom=300;
      this.cargarZoom(item);;
    }else if (item==5) {
      this.radioZoom=600;
      this.cargarZoom(item);;
    }else if (item==4) {
      this.radioZoom=1200;
      this.cargarZoom(item);;
    }else if (item==3) {
      this.radioZoom=2400;
      this.cargarZoom(item);;
    }else if (item==2) {
      this.radioZoom=4800;
      this.cargarZoom(item);;
    }else if (item==1) {
      this.radioZoom=9600;
      this.cargarZoom(item);;
    }
  }

  createMarkerUser() {
    if (this.lat == 0 && this.lng == 0) {
      //this.message("No se pudo establecer la ubicacion");
    } else {
      var place = { lat: this.lat, lng: this.lng };
      var image = {
          url: icons.kenny.icon,
          size: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(16, 32),
          scaledSize: new google.maps.Size(32, 32)
        };
      var marker = new google.maps.Marker({
        map: this.map,
        position: place,
        icon: image,
      });

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent("Estas Aqui");
        infowindow.open(this.map, this);

      });

    }
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  createmarkers() {
    this.sucursalAll.forEach((sucursal) => {
      var profiles = sucursal.profiles;
      profiles.forEach((profile) => {
        var image = {
          url: iconsMaps[profile.type_profile].icon,
          size: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(16, 32),
          scaledSize: new google.maps.Size(32, 32)
        };

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(sucursal.latitude, sucursal.longitude),
          icon: image,
          draggable: false,
          animation: google.maps.Animation.DROP,
          map: this.map
        });

        google.maps.event.addListener(marker, 'click',  () =>{
          this.info(profiles);
        
        });
      });
    });
  }


  info(sucursal){    
    console.log(sucursal);
    let prod=[];
    for (var i = 0; i < sucursal.length; i++) {
      var type=sucursal[i].type_profile;
      var title=sucursal[i].title;
      if(this.follow(sucursal[i])){
        sucursal[i].followColor="icon-seguir2"
      }else{
        sucursal[i].followColor="icon-seguir"
      }
      console.log(sucursal);
      for (var j =  0; j <sucursal[i].products.length; j++) {
        let product=sucursal[i].products[j];
        if(this.wish(product)){
          product.followColor="icon-seguir2"
        }else{
          product.followColor="icon-seguir"
        }
        product.type_profile=type;
        product.title=title;
        prod.push(product);
      }
    }
    var sucu=[];
    if(sucursal.length>3){
      for (var i = 0; i < 3; i++) {
        sucu.push(sucursal[i])
      }
    }else{
      sucu=sucursal;
    }
    var pro=[];
    if(prod.length>5){
      for (var i = 0; i < 5; i++) {
        pro.push(prod[i])
      }
    }else{
      pro=prod;
    }
    this.productsAll3=prod;
    this.productsAll2=prod;
    this.productsAll=pro;
    this.window = true;    
    console.log(this.window)
    this.detail3=sucursal;
    this.detail2=sucursal;
    this.detail = sucu;
    console.log(this.productsAll3,this.detail3);
  }

  closeinfo(){
    this.window = false;
  }

  closeinfo2(){
    this.window2 = false;
  }

  messages(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present()
  }
/*   goProfile(profile){
    console.log(profile)
    this.navCtrl.push(DetailProfilePage,{
      profile:profile,
      type:
    })
  } */
}