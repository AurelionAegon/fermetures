import React, { Component } from "react";
import Card from "../shared/Card";
export default class Section extends Component {
  render() {
    return (
      <section className="lg:pt-[120px] pb-10 lg:pb-20 pt-40 px-10 py-6 mx-4">
        <div className="container">
          <div className="flex flex-wrap -mx-4 ">
                <Card src="https://picsum.photos/201" />
                <Card src="https://picsum.photos/223"/>
                <Card src="https://picsum.photos/233"/>
                <Card src="https://picsum.photos/134"/>
                <Card src="https://picsum.photos/275"/>
                <Card src="https://picsum.photos/630"/>
                <Card src="https://picsum.photos/130"/>
                <Card src="https://picsum.photos/330"/>
                <Card src="https://picsum.photos/430"/>
          </div>
        </div>
      </section>
    );
  }
}
