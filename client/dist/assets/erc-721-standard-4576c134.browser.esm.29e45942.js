import{_ as t,a as s,T as o,s as c,af as p}from"./index.ff31cc21.js";class d{get chainId(){return this._chainId}constructor(r,n,i){t(this,"contractWrapper",void 0),t(this,"storage",void 0),t(this,"erc721",void 0),t(this,"_chainId",void 0),t(this,"transfer",s(async(e,a)=>this.erc721.transfer.prepare(e,a))),t(this,"setApprovalForAll",s(async(e,a)=>this.erc721.setApprovalForAll.prepare(e,a))),t(this,"setApprovalForToken",s(async(e,a)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await c(e),a]}))),this.contractWrapper=r,this.storage=n,this.erc721=new p(this.contractWrapper,this.storage,i),this._chainId=i}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.readContract.address}async getAll(r){return this.erc721.getAll(r)}async getOwned(r){return r&&(r=await c(r)),this.erc721.getOwned(r)}async getOwnedTokenIds(r){return r&&(r=await c(r)),this.erc721.getOwnedTokenIds(r)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(r){return this.erc721.get(r)}async ownerOf(r){return this.erc721.ownerOf(r)}async balanceOf(r){return this.erc721.balanceOf(r)}async balance(){return this.erc721.balance()}async isApproved(r,n){return this.erc721.isApproved(r,n)}}export{d as S};
