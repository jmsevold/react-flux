import Dispatcher from '../dispatchers/dispatcher';
import AppConstants from '../constants/appConstants';
import { EventEmitter } from 'events';
import { findIndex } from 'lodash';




var names = [{firstName: "jonathan", lastName: "sevold"}];


const AppStore = Object.assign(EventEmitter.prototype, {


  emitChange(){
    this.emit( 'change' )
  },

  addChangeListener(callback){
    this.on( 'change', callback)
  },

  removeChangeListener(callback){
    this.removeListener('change', callback )
  },

  getNames(){
    return names;
  }
});


Dispatcher.register( function(action){
    switch(action.actionType){
      case AppConstants.ADD_NAME:
        let name = action.name;
        console.log(names,'<---- names');
        names.push(name);
        break;

      case AppConstants.REMOVE_NAME:
        let name1     = action.name;
        let firstName = name1.firstName;
        let lastName  = name1.lastName;
        let names     = AppStore.getNames();
        let index     = findIndex(names,{firstName: firstName, lastName: lastName});
        names.splice(index,1);
        break;
    }

    AppStore.emitChange();

  })

export default AppStore;















