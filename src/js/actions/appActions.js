import AppConstants from '../constants/appConstants';
import Dispatcher from '../dispatchers/dispatcher';

export default {
  addName(name){
    let action = {
      actionType: AppConstants.ADD_NAME,
      name: name
    };
    
    Dispatcher.dispatch(action)
  },

   removeName(name){
    let action = {
      actionType: AppConstants.REMOVE_NAME,
      name: name
    };
    Dispatcher.dispatch(action);
  }
}




