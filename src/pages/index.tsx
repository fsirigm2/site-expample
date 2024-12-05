
"use client";
import HeroSearchForm from "@fsirigm2/obe-example/HeroSearch";
import HeroSearchForm2 from "@fsirigm2/obe-example/HeroSearch2";
import HeroSearchForm3 from "@fsirigm2/obe-example/HeroSearch3";
import HeroSearchForm4 from "@fsirigm2/obe-example/HeroSearch4";



export default function Home() {
  return (
    <div
      className="w-full h-screen"
    >
      <HeroSearchForm className="m-auto"/>
      <HeroSearchForm2 className="m-auto"/>
      <HeroSearchForm3 className="m-auto"/>
      <HeroSearchForm4 className="m-auto"/>
      
    </div>
  );
}
