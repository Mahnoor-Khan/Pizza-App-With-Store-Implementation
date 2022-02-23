import { toJS } from "mobx";
import {types , onSnapshot , flow , applySnapshot , getSnapshot} from "mobx-state-tree";
import {setData ,getData} from '../api/api'


export const popupModal =types.model({
    checkValues :types.maybeNull(types.array(types.number)),
    pizzaType : types.maybeNull(types.number),
    quantity : types.maybeNull(types.number),

})

export const popupDataModal = types.model({
data : types.maybeNull(popupModal)
})
.views((self)=>({
// @ts-ignore
get getDATA(){
    return  toJS(self.data)
}
})).actions((self)=>{
    const getDataa = flow(function* fetchData() {
        console.log(">>>")
        try {
          const res = yield getData()
          self.data = res
        } catch (error) {
          console.log('error', error); 
        } finally {
         console.log('ends')
        }
      }) 

  const setDataa = flow(function* fetchData(data) {
    console.log(">>>")
    try {
      const res = yield setData(data)
    } catch (error) {
      console.log('error', error); 
    } finally {
     console.log('ends')
    }
  })

  return {setDataa , getDataa}
})
export function initpopupData() {
return popupDataModal.create({})
}
