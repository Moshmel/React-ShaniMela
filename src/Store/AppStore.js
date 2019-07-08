import { observable, computed, action, decorate } from "mobx";
import reviewService from "../services/reviews-service";
import storageService from "../services/storage-service";

const USERDATA = "user-data";
class AppStore {
  constructor() {
    this.reviews = reviewService.getReviews();
  }

  user = null;

  get getReviews() {
    return this.reviews;
  }
  get isUserLoggedOn() {
    if (this.user) return true;
    else return false;
  }
disconnectUser = ()=>{
    this.user=null;
    storageService.saveToStorage(USERDATA,null)
    console.log('user deleted');

}
  setUser = user => {
    this.user = user;
    console.log('setting user',user);
    storageService.saveToStorage(USERDATA,user);
  };

  checkIfLoggedOn = () => {
    var userFromStorage = storageService.loadFromStorage(USERDATA);

    if (userFromStorage) {

      this.setUser(userFromStorage);
      return userFromStorage;
    }
    else return null;
  };
}

decorate(AppStore, {
  getReviews: computed,
  isUserLoggedOn: computed,
  reviews: observable,
  user: observable,
  setUser: action,
  checkIfLoggedOn: action,
  disconnectUser: action
});

const App = new AppStore();
export default App;

// class MyComp {
//     state = {
//         loading: true,
//         data: null
//     }

//     async componentDidMount(){
//         const data = await fetchData()
//         this.setState({data, loading: false})
//     }

//     render(){
//         const {loading, data} = this.state;

//         if(loading) {
//             return <Loading/>
//         }

//         return (
//             <div>...</div>
//         )
//     }
// }
