import Header from "./components/header/header.js"
import Info from "./components/info/info.js"
import Picture from "./components/picture/picture.js"

export default function App() {
  let info = new Object()
  info.nom = 'Quentin'
  info.age = '23'
  info.taille = '185cm'
  info.src = './img/MonsieurOiseau.jpg'
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Header _param1={'Kc'}/>
      <Header _kadri1={'kc2'}/>
      <Picture _img1={'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-5521/media-gallery/laptop_latitude_15_5521_gallery_3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=650&qlt=100,1&resMode=sharp2&size=650,402&chrss=full'}/>
      <Picture _img2={`./img/MonsieurOiseau.jpg`}/>
      <Info _p1={info.nom}/>
      <Info _p2={info.age}/>
      <Info _p3={info.taille}/>
      <Info _p4={info.src}/>
    </h1>
  )
}