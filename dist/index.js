import{createSlice as e}from"@reduxjs/toolkit";var o,r={setIncrementValue:function(e){e.value++},setNumber:function(e,o){var r=o.payload;console.log("settnumberits new reducer from slice",r),e.counter=e.counter+r},setDecrementValue:function(e,o){var r=o.payload;console.log("decrement from decrement",r),e.value=e.value-10},changeVisibilityOfConfigureForm:function(e,o){var r=o.payload;e.isModalVisible=r}},t=e({name:"configureTools",initialState:{isModalVisible:!1,value:0,counter:0},reducers:r}),n=(o=t.actions).setDecrementValue,i=o.setNumber,a=o.changeVisibilityOfConfigureForm,l=o.setIncrementValue;t.reducer;export{a as changeVisibilityOfConfigureForm,t as configureToolsSlice,r as reducers,n as setDecrementValue,l as setIncrementValue,i as setNumber};
//# sourceMappingURL=index.js.map
