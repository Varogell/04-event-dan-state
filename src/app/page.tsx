"use client";
import Tombol_1, {Tombol_2} from "../component/button";

export default function Home(){
  return(
    <>
    <div className="container ,mx-auto">
      <h2>Kuis Kota</h2>
      <Tombol_1/>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
      </div>
      </>
  );
}