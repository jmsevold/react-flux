import React from 'react';
import AppStore from '../stores/appStore';
import CatalogItem from './catalogItem';
import StoreWatchMixin from '../mixins/StoreWatchMixin';

function getCatalog(){
  return { items: AppStore.getCatalog() }
}

const Catalog = (props) => {
  let items = props.items.map( item => {
    return <CatalogItem key={ item.id } item={ item } />
  });
  return (
    <div className="row">
      { items }
    </div>
  )
}
export default StoreWatchMixin(Catalog, getCatalog);