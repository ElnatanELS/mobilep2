import { CodigoProvider } from './../../providers/codigo/codigo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-codigo',
  templateUrl: 'codigo.html',
})
export class CodigoPage {

  title: string;
  form: FormGroup;
  codigo: any;
 
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: CodigoProvider,
    private toast: ToastController) {
 
    // maneira 1
    this.codigo = this.navParams.data.codigo || { };
    this.createForm();
 
    // // maneira 2
    // this.codigo = { };
    // this.createForm();
 
    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();
 
    //     this.codigo = c;
    //     this.createForm();
    //   })
    // }
 
    this.setupPageTitle();
  }
 
  private setupPageTitle() {
    this.title = this.navParams.data.codigo ? 'Alterando contato' : 'Novo contato';
  }
 
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.codigo.key],
      ling: [this.codigo.ling, Validators.required],
      cod: [this.codigo.cod, Validators.required],
      titulo: [this.codigo.titulo, Validators.required],
    });
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}


