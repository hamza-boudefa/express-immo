import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { MdBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { TbDimensions } from "react-icons/tb";
import { GrShareOption } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./PropertyCardd.css"
import { Pagination } from 'react-bootstrap';

let data=[{
    address:"chera3 l mondher etounsi num 9",
    operation:"louer",
    prix:"1100",
    titre:"villa a vendre a tunis",
    disc:"  Enchanting three bedrooms, three bath home with spacious one bedroom, one bath...",
    chambres:'4',
    salleDeau:'1',
    surface:"200",
    agent:{
      agentName:"rabi3 bouden",
      photoDeProfile:"https://yt3.ggpht.com/ytc/AMLnZu_u1j38r2Vwwo266wPHrZHnj8rW5B0CsiZK5OoElw=s900-c-k-c0x00ffffff-no-rj"
    }

}
,
{   address:"manedrouch",
operation:"louer",
prix:"1100",
titre:"farmacie fi sfa9es",
disc:"  Enchanting three bedrooms, three bath home with spacious one bedroom, one bath...",
chambres:'6',
salleDeau:'1',
surface:"150",
agent:{
  agentName:"samir pesiron",
  photoDeProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBACeqKWljlRGmHZjVon6AuDzmeVSV699onWwerJgiYz5bsF2zU5T19Llp_1ymT8tMgw&usqp=CAU"
}
},
{   address:"manedrouch",
operation:"vente",
prix:"1100",
titre:"farmacie fi sfa9es",
disc:"  Enchanting three bedrooms, three bath home with spacious one bedroom, one bath...",
chambres:'6',
salleDeau:'1',
surface:"150",
agent:{
  agentName:"samir pesiron",
  photoDeProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBACeqKWljlRGmHZjVon6AuDzmeVSV699onWwerJgiYz5bsF2zU5T19Llp_1ymT8tMgw&usqp=CAU"
}
},
{   address:"manedrouch",
operation:"louer",
prix:"3500",
titre:"farmacie fi sfa9es",
disc:"  Enchanting three bedrooms, three bath home with spacious one bedroom, one bath...",
chambres:'6',
salleDeau:'1',
surface:"150",
agent:{
  agentName:"samir pesiron",
  photoDeProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBACeqKWljlRGmHZjVon6AuDzmeVSV699onWwerJgiYz5bsF2zU5T19Llp_1ymT8tMgw&usqp=CAU"
}
}]


const PropertyCard = () => {
  const  itemsPerPage =2
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
    <div className='property-card-container'>
  {currentItems && currentItems.map((el)=>  
   <div className='property-card' >
    <div className="box">
    <div className="top">
      <img
        src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"
        alt=""
      />
    </div>
    <div className="card-address">
      <FaMapMarkerAlt />
      <span> {el.address} </span>
    </div>
    <div class="bottom">
      <div class="price">
        {el.operation && el.operation== "louer"?<span style={{background:"green"}} > {el.operation} </span> : <span> {el.operation} </span> }
        <span>{el.prix} MD</span>
      </div>
      {/* <GrShareOption/> */}
      <h3>{el.titre} </h3>
      <p>
       {el.disc}
      </p>
      <div class="advants">
        <div>
          <span>chambres</span>
          <div>
            <MdBed /> <span>{el.chambres}</span>
          </div>
        </div>
        <div>
          <span>salle d'eau</span>
          <div>
            <BiBath />
            <span>{el.salleDeau}</span>
          </div>
        </div>
        <div>
          <span>surface</span>
          <div>
            <TbDimensions />
            <span>
              {el.surface}<span>m²</span>
            </span>
          </div>
        </div>
      </div>
      <div className="card-agent">
        <img
          src={el.agent.photoDeProfile}
          alt=""
        />
        <div className="card-agent-cred">
          <h5>{el.agent.agentName}</h5>
          <p>agent immobiler</p>
        </div>
      </div>
    </div>
  </div>
  </div>)}
     
  </div>
  <div className='pagination-container'>
  <ReactPaginate
   breakLabel="..."
   nextLabel=">"
   onPageChange={handlePageClick}
   pageRangeDisplayed={2}
   pageCount={pageCount}
   previousLabel="<"
   renderOnZeroPageCount={null}
   containerClassName="pagination"
   pageLinkClassName="page-num"
   previousLinkClassName="page-num"
   nextLinkClassName="page-num"
   activeLinkClassName="active"
 />
  </div>
  
 </>
  )
}

export default PropertyCard