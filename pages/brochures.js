import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import UpFooter from "../components/footer/UpFooter";
import MySwiper from "../components/shared/MySwiper";
import Alert from "../components/conseils/Alert";
import Section from "../components/shared/Section";
import Card from "../components/shared/Card";
import { playlist } from "./data";
export const getStaticProps = async () => {
  return {
    props: {
      playLists: playlist,
    },
  };
};
export default ({ playLists }) => (
  <>
    <Header />
    <div className=" mt-32 px-10 py-6  mx-4">
      <Alert
        title="BROCHURES"
        description="Retrouvez ici les brochures téléchargeables de nos gammes de produits.
            Plus écolo que le papier !"
      />
    </div>
    <MySwiper />
    <Section />
    {/* <section className="lg:pt-[120px] pb-10 lg:pb-20 pt-40 px-10 py-6 mx-4">
      <div className="container">
        <div className="flex flex-wrap -mx-4 "> */}
          {/* {playLists.map(
            playlist => (
              <Card key={playlist.id} src={playlist.url} text={playlist.name} title={playlist.name}/>
            )
          )} */}
        {/* </div>
      </div>
    </section> */}
  </>
);
// export default class brochures extends Component {
//   render() {
//     return (
//       <div className="">
//         <Header />
//         <div className=" mt-32 px-10 py-6  mx-4">
//           <Alert
//             title="BROCHURES"
//             description="Retrouvez ici les brochures téléchargeables de nos gammes de produits.
//             Plus écolo que le papier !"
//           />
//         </div>

//         <MySwiper />
//         <section className="lg:pt-[120px] pb-10 lg:pb-20 pt-40 px-10 py-6 mx-4">
//         <div className="container">
//           <div className="flex flex-wrap -mx-4 ">
//                 <Card src="https://picsum.photos/201" text="jajskdklmk kamsk kamsxk" title="title"/>
//                 {/* <Card src="https://picsum.photos/223"/>
//                 <Card src="https://picsum.photos/233"/>
//                 <Card src="https://picsum.photos/134"/>
//                 <Card src="https://picsum.photos/275"/>
//                 <Card src="https://picsum.photos/630"/>
//                 <Card src="https://picsum.photos/130"/>
//                 <Card src="https://picsum.photos/330"/>
//                 <Card src="https://picsum.photos/430"/> */}
//           </div>
//         </div>
//       </section>
//         <UpFooter />
//         <Footer />
//       </div>
//     );
//   }
// }
