import React, {useState} from "react";


type MyProps = {
  // using `interface` is also ok
  message: string;
  products: any;
};
type MyState = {
  count: number; // like this
  products: [{apiResources: any,
    approvalType: string,
    attributes: [],
    createdAt: number,
    createdBy: string,
    description: string,
    displayName: string,
    environments: any,
    lastModifiedAt: number,
    lastModifiedBy: string,
    name: string,
    proxies: any,
    quota: number,
    quotaInterval: number,
    quotaTimeUnit: string,
    scopes: [
      
    ]}];
};
class ApiProducts extends React.Component<MyProps, MyState> {
  
  readonly state: Readonly<MyState> = { count:7656, products:  [
      {
        apiResources: [],
        approvalType: "auto",
        attributes: [],
        createdAt: 1515290000826,
        createdBy: "accounts_apigee_admin@google.com",
        description: "helloworld product for Apigee",
        displayName: "helloworld",
        environments: [
          "prod",
          "test"
        ],
        lastModifiedAt: 1515290000826,
        lastModifiedBy: "accounts_apigee_admin@google.com",
        name: "helloworld",
        proxies: [],
        quota: 5,
        quotaInterval: 1,
        quotaTimeUnit: "minute",
        scopes: [
          
        ]
      }
    ]
  };
 
  render() {
    return (
      <div>
        {this.state.count}
        <ul>
          {this.state.products.map(product => (<li> {product.displayName}</li>))}
        </ul>
      </div>
    );
  }
}

export default ApiProducts;







