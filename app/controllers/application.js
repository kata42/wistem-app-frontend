/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-03-01T00:13:16-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: application.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-01T01:24:10-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  actions: {
    externalLink(item){
      window.open(item.link);
    },
    openDialog(event) {
      this.set('dialogOrigin', Ember.$(event.currentTarget));
      this.set('showDialog', true);
    },
    closeDialog(result) {
      this.set('result', result);
      this.set('showDialog', false);
    },
    logout(){
      this.get('auth').logout();
    }
  }
});
