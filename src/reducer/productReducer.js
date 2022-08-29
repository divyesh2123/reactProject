import { AddToCart, GetData } from "../cons"

const initialState = {

    items : [],
    cart : [],
    currentSelectItem : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GetData:
    return { ...state, items : payload }


   case AddToCart:

     let myCart =  [...state.cart];

    if(myCart.length ==0)
    {
        myCart.push({...payload, count :1});
    }
    else
    {
      var checkProductExist =  myCart.filter((data,index)=> {

        return data.id == payload.id;
      })
        if(checkProductExist.length > 0)
        {
            var myArray = myCart.map((elemment)=>{

              if(elemment.id == payload.id)
              {
                return {...elemment, count : elemment.count +1}
              }
              else
              {
                return elemment;
              }

            });

            return {...state, cart : myArray};

        }
        else
        {
          myCart.push({...payload, count :1});

        }

    }

    return {...state, cart : myCart };


  
  default:
    return state
  }
}
