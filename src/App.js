import React, { Component } from "react";
import ProductDisplay from "./component/productDisplay/men/productDisplay";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import WomenProducts from "./component/productDisplay/women/womendisplay";
import Layout from "./hoc/layout/layout";
import ProductSelected from "./container/productSelected/productSelected";
import Cart from "./container/cart/cart";
import Forms from "./container/forms/forms";
import Auth from "./container/auth/auth";
import Logout from "./container/auth/logout";
import Home from "./container/home/home";
import Signup from "./container/auth/signup";
import Footer from "./component/footer/footer";
import * as actionCreators from "./store/actions/products";

class App extends Component {
  componentDidMount(){
   
    console.log('app.js component');
    
  }
  
  render() {
    const id=localStorage.getItem('id')
    this.props.onload();
    this.props.reloadSelectedProduct(id);
    console.log('app.js render');
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productDisplay" exact>
            <ProductDisplay />
          </Route>
          <Route exact path="/women">
            <WomenProducts />
          </Route>
          <Route exact path={"/forms"} component={Forms} />
          <Route exact path={"/men/:id"} component={ProductSelected} />
          <Route exact path={"/women/:id"} component={ProductSelected} />
          <Route exact path={"/shoppingCart"} component={Cart} />
          <Route  path={"/signIn"} component={Auth} />
          <Route path={"/signup"} component={Signup} />
          <Route exact path={"/logout"} component={Logout} />
        </Switch>
        <Footer />
      </Layout>
    );
  }
}

const mapDispatchProps=(dispatch)=>{
  return {
    onload:()=>dispatch(actionCreators.addProducts()),
    reloadSelectedProduct:(id)=>dispatch(actionCreators.selectedProduct(id))
  }
}

export default connect(null,mapDispatchProps)( App);
