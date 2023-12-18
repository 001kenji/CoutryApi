import { useId, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

import database from '../data.json'
function App() {
  const [theme, setTheme] = useState('light')
  const [themeIcon, setThemeIcon] = useState(true)
  const [showCard, setShowCard] = useState(false)
  const [cardSelcted, setCardSelected] = useState('')
  const borderId = useId()
  const [ShowRegion, setshowRegion] = useState(false)
 
  const [DisplayWhich, setDisplayWhich] = useState('all')
  const [InputData, setInputData] = useState({
    search : '',
    region : '',
    clickedName : '',
    alpha3Code : ''
  })



  function Changes(event) {
    event.preventDefault()
    const {value, name} = event.target
      setInputData((e) => {
        return {
          ...e,
          [name] : value
        }
      })
      SpesificCard('search')
  }
  function Regions(event) {
    event.preventDefault()
    
    const {value, name} = event.target
      setInputData((e) => {
        return {
          ...e,
          [name] : value
        }
      })
    
  }
  function ClickedChanges(props) {
console.log(props)
    if(props == 'border') {
      setDisplayWhich('region')
        setshowRegion('borderClick')
        console.log('triggered')
    }else {
      console.log('also runnded')
      setInputData((e) => {
        return {
          ...e,
          clickedName : props
        }
      })
      ClickedOne()
    }
    
  
  }
    



  useLayoutEffect(() => {
    SpesificRegion('Region')  
  },[InputData.region])
  
  
  function Themesetter(props) {

    if(props == 'moon') {
      console.log('moon')
      setThemeIcon((e) => !e)
      setTheme('dark')
      
    }else if(props == 'light'){
      console.log('light')
      setThemeIcon((e) => !e)
      setTheme('light')
    }
}

  const UniversalStyler = {
     backgroundColor : theme == 'light' ? '' : 'hsl(207, 26%, 17%)',
    // color : !theme ? 'black': ' rgb(226 232 240)'  
  }
  const headStyle = {
    backgroundColor : theme == 'light' ? '' : 'hsl(207, 26%, 17%)',
  }
  const inputStyler = {
    // backgroundColor : theme == 'light' ? '' : 'hsl(0, 0%, 52%)'
  }

 function SpesificCard(props) {

     setShowCard(true)
     setshowRegion('spec')
     setDisplayWhich('region')
   if(props = 'search') {
       
  
   
    
    var search = database.map((details,i) => {

      if(details.name.toLowerCase().match(InputData.search.toLowerCase())) {
        return  <div  onClick={() => ClickedChanges(details.name)} className=' shadow-md dark:shadow-slate-300 shadow-slate-800' id='mapping-master-div'>
       
        <div id='mapping-image-div'> {/* image div */}
              <img src={details.flags.svg} alt="" />
        </div>

        <div id='mapping-major-content-div'> {/* content div */}

            <div id='mapping-name-div'>
              <span className=' font-bold text-lg'>{details.name}</span>
            </div>
             <div>
                <div id='mapping-content-detail-1'>
                  <span className=' hidden'><p className=' font-semibold'>Native Name:</p> {details.nativeName}</span>
                  <span><p className=' font-semibold'>Population:</p> {details.population}</span>
                  <span><p className=' font-semibold'>Region:</p> {details.region}</span>
                  <span><p className=' font-semibold'>Sub Region:</p> {details.subregion}</span>
                  <span className=' hidden'><p className=' font-semibold'>Capital:</p>{details.capital}</span>        
                </div>
              <div className=' hidden' id='content-detail-2'>
                <span>Top Level Domain: {details.topLevelDomain.toString()}</span>
                <span>Currencies: {details.currencies ? details.currencies[0].name : 'N/A' } </span>
                <span>Languages: {details.languages ? details.languages[0].name : 'N/A' } </span>
              </div> 
            </div>
            <div className=' hidden' id='mapping-border-div'>
                <div>Borders: {details.borders ?  <Border value={details.borders} bord={details.alpha3Code} /> : 'None'}</div>
              
            </div> 

        </div>
        
      </div>
    
      }
    }
)
    return (
      search
    )
    
  }

  
  

 }
 function ClickedOne (props) {

  setShowCard(true)
  
  setshowRegion(false)
  setDisplayWhich('one')
 
 var search = database.map((details,i) => {

   
  if(details.name.toLowerCase().match(InputData.clickedName.toLowerCase()) ) {
    return  <div  onClick={() => ClickedChanges('border')} className=' shadow-md dark:shadow-slate-300 shadow-slate-800' id='mapping-master-div'>
   
    <div id='mapping-image-div'> {/* image div */}
          <img src={details.flags.svg} alt="" />
    </div>

    <div id='mapping-major-content-div'> {/* content div */}

        <div className=' ' id='mapping-name-div'>
          <span className=' font-bold text-xl'>{details.name}</span>
        </div>
         <div>
            <div className=' my-3 gap-1' id='mapping-content-detail-1'>
              <span className=' '><p className=' font-semibold'>Native Name:</p> {details.nativeName}</span>
              <span><p className=' font-semibold'>Population:</p> {details.population}</span>
              <span><p className=' font-semibold'>Region:</p> {details.region}</span>
              <span><p className=' font-semibold'>Sub Region:</p> {details.subregion}</span>
              <span className=' '><p className=' font-semibold'>Capital:</p>{details.capital}</span>        
            </div>
          <div className=' flex flex-col my-3 gap-1' id='content-detail-2'>
            <span className=' inline-flex gap-3'><p className=' font-semibold'>Top Level Domain:</p> {details.topLevelDomain.toString()}</span>
            <span className=' inline-flex gap-3'><p className=' font-semibold'>Currencies:</p> {details.currencies ? details.currencies[0].name : 'N/A' } </span>
            <span className=' inline-flex gap-3'><p className=' font-semibold'>Languages:</p> {details.languages ? details.languages[0].name : 'N/A' } </span>
          </div> 
        </div>
        <div className=' ' id='mapping-border-div'>
            <div className=' flex flex-col'><p className=' font-semibold'>Borders:</p> <blockquote className=' flex flex-row flex-wrap gap-2 justify-around'>{details.borders ?  <Border value={details.borders} bord={details.alpha3Code} /> : 'None'}</blockquote> </div>
          
        </div> 

    </div>
    
  </div>
   
   }
  
 }
)

 return (
   search
 )
 

}


 function SpesificRegion(props) {
 
  setShowCard(true)
  setDisplayWhich('region')
if(props = 'Region') {

 setshowRegion('Region')
 var search = database.map((details,i) => {

   if(details.region.match(InputData.region)) {
     return  <div onClick={() => ClickedChanges(details.name)} className=' shadow-md dark:shadow-slate-300 shadow-slate-800' id='mapping-master-div'>
    
     <div id='mapping-image-div'> {/* image div */}
           <img src={details.flags.svg} alt="" />
     </div>

     <div id='mapping-major-content-div'> {/* content div */}

         <div id='mapping-name-div'>
           <span className=' font-bold text-lg'>{details.name}</span>
         </div>
          <div>
             <div id='mapping-content-detail-1'>
               <span className=' hidden'><p className=' font-semibold'>Native Name:</p> {details.nativeName}</span>
               <span><p className=' font-semibold'>Population:</p> {details.population}</span>
               <span><p className=' font-semibold'>Region:</p> {details.region}</span>
               <span><p className=' font-semibold'>Sub Region:</p> {details.subregion}</span>
               <span className=' hidden'><p className=' font-semibold'>Capital:</p>{details.capital}</span>        
             </div>
           <div className=' hidden' id='content-detail-2'>
             <span>Top Level Domain: {details.topLevelDomain.toString()}</span>
             <span>Currencies: {details.currencies ? details.currencies[0].name : 'N/A' } </span>
             <span>Languages: {details.languages ? details.languages[0].name : 'N/A' } </span>
           </div> 
         </div>
         <div className=' hidden' id='mapping-border-div'>
             <div>Borders: {details.borders ?  <Border value={details.borders} bord={details.alpha3Code} /> : 'None'}</div>
           
         </div> 

     </div>
     
   </div>
   
   }
 }
)
 return (
   search
 )
 


 


 
 var search = database.map((details,i) => {

   if(details.name.toLowerCase().match(InputData.search.toLowerCase())) {
     return  <div className=' shadow-md dark:shadow-slate-300 shadow-slate-800' id='mapping-master-div'>
    
     <div id='mapping-image-div'> {/* image div */}
           <img src={details.flags.svg} alt="" />
     </div>

     <div id='mapping-major-content-div'> {/* content div */}

         <div id='mapping-name-div'>
           <span className=' font-bold text-lg'>{details.name}</span>
         </div>
          <div>
             <div id='mapping-content-detail-1'>
               <span className=' hidden'><p className=' font-semibold'>Native Name:</p> {details.nativeName}</span>
               <span><p className=' font-semibold'>Population:</p> {details.population}</span>
               <span><p className=' font-semibold'>Region:</p> {details.region}</span>
               <span><p className=' font-semibold'>Sub Region:</p> {details.subregion}</span>
               <span className=' hidden'><p className=' font-semibold'>Capital:</p>{details.capital}</span>        
             </div>
           <div className=' hidden' id='content-detail-2'>
             <span>Top Level Domain: {details.topLevelDomain.toString()}</span>
             <span>Currencies: {details.currencies ? details.currencies[0].name : 'N/A' } </span>
             <span>Languages: {details.languages ? details.languages[0].name : 'N/A' } </span>
           </div> 
         </div>
         <div className=' hidden' id='mapping-border-div'>
             <div>Borders: {details.borders ?  <Border value={details.borders} bord={details.alpha3Code} /> : 'None'}</div>
           
         </div> 

     </div>
     
   </div>
   console.log(details.name + ' ok')
   }
 }
)
 return (
   search
 )
 
}




}

function BorderClickedFunc(props) {
  setInputData((e) => {
    return {
      ...e,
      alpha3Code : props,
      clickedName : ''
    }
  })
 
BorderClicked(props)
console.log('am hrere')
}
function BorderClicked(props) {

  setShowCard(true)
  setshowRegion('borderClick')
  setDisplayWhich('region')
if(props) {
     
console.log(InputData.alpha3Code)

 
 var search = database.map((details,i) => {

   if(details.alpha3Code.match(InputData.alpha3Code)) {
   
     return  <div onClick={() => ClickedChanges(details.name)}  className='  shadow-md dark:shadow-slate-300 shadow-slate-800' id='mapping-major-border-div'>
    
     <div id='mapping-border-image-div'> {/* image div */}
     
           <img src={details.flags.svg} alt="" />
     </div>

     <div id='mapping-border-major-content-div'> {/* content div */}
        
         <div id='mapping-name-div'>
          
           <span className=' font-bold text-lg'>{details.name}</span>
         </div>
          <div id='mapping-master-border-content-div'>
             <div id='mapping-content-border-1'>
               <span className=' lg:flex hidden'><p className=' font-semibold'>Native Name:</p> {details.nativeName}</span>
               <span><p className=' font-semibold'>Population:</p> {details.population}</span>
               <span><p className=' font-semibold'>Region:</p> {details.region}</span>
               <span><p className=' font-semibold'>Sub Region:</p> {details.subregion}</span>
               <span className=' lg:flex hidden'><p className=' font-semibold'>Capital:</p>{details.capital}</span>        
             </div>
           <div className=' lg:flex lg:flex-col hidden' id='content-border-detail-2'>
             <span>Top Level Domain: {details.topLevelDomain.toString()}</span>
             <span>Currencies: {details.currencies ? details.currencies[0].name : 'N/A' } </span>
             <span>Languages: {details.languages ? details.languages[0].name : 'N/A' } </span>
           </div> 
         </div>
         <div className=' hidden' id='mapping-border-border-div'>
          <p>Borders:</p>
             <div id='mapping-host-border-div'> {details.borders ?  <Border value={details.borders} bord={details.alpha3Code} /> : 'None'}</div>
           
         </div> 

     </div>
     
   </div>
 
   }
 }
)
 return (

  
   search
 )
 
}




}



var identity = 'kenji';
  function Border(value,bord) {   
    // console.log(value.bord)
      var data =  value.value.map((val,i) => 
        <div>
           <button onClick={() => BorderClickedFunc(val)} className=' py-1 px-5 text-base bg-slate-200 rounded-md dark:bg-slate-600'>{val}</button>
        </div>
       
         )
         return (
          data
         )
  }

   const allCards = database.map((details,i) => 

      <div value={details.name} name='clickedName' onClick={() => ClickedChanges(details.name)}  className=' shadow-md dark:shadow-slate-300 shadow-slate-800' id='mapping-master-div'>
       
        <div id='mapping-image-div'> {/* image div */}
              <img src={details.flags.svg} alt="" />
        </div>

        <div id='mapping-major-content-div'> {/* content div */}

            <div id='mapping-name-div'>
              <span className=' font-bold text-lg'>{details.name}</span>
            </div>
             <div>
                <div id='mapping-content-detail-1'>
                  <span className=' hidden'><p className=' font-semibold'>Native Name:</p> {details.nativeName}</span>
                  <span><p className=' font-semibold'>Population:</p> {details.population}</span>
                  <span><p className=' font-semibold'>Region:</p> {details.region}</span>
                  <span><p className=' font-semibold'>Sub Region:</p> {details.subregion}</span>
                  <span className=' hidden'><p className=' font-semibold'>Capital:</p>{details.capital}</span>        
                </div>
              <div className=' hidden' id='content-detail-2'>
                <span>Top Level Domain: {details.topLevelDomain.toString()}</span>
                <span>Currencies: {details.currencies ? details.currencies[0].name : 'N/A' } </span>
                <span>Languages: {details.languages ? details.languages[0].name : 'N/A' } </span>
              </div> 
            </div>
            <div className=' hidden' id='mapping-border-div'>
                <div>Borders: {details.borders ?  <Border value={details.borders} bord={details.alpha3Code} /> : 'None'}</div>
              
            </div> 

        </div>
        
      </div>
  )



 





  

  return (
   <>
  <div className={`${theme}`}>
    <div style={UniversalStyler} className=' bg-slate-100 text-slate-900 dark:text-slate-200 min-h-screen '  id='universal-div'> {/* main div */}
      <div style={headStyle} className=' bg-white  dark:text-slate-200' id='header-container-div'>
        <span className=' lg:text-3xl md:text-2xl font-semibold text-lg'>Where in the world?</span>
        <div >
        {themeIcon ? <div className=' align-middle content-center inline-flex gap-2'><FaMoon className=' my-auto text-slate-800' onClick={() => Themesetter('moon')}/> <span className=' md:text-base font-semibold text-xs'>Dark Theme</span> </div> : <div className=' inline-flex gap-2'> <MdOutlineWbSunny className='my-auto' onClick={() => Themesetter('light')} /> <span className='md:text-base font-semibold text-xs'>Light Theme</span>  </div> }
        </div>
      </div>
      <div id='navbar-container-div'> {/* navbar container div */}
        <div id='search-bar-div'><input name='search' onChange={Changes} style={inputStyler} placeholder='Search for a coutry ...' className={` placeholder:text-slate-300 rounded-md p-3 bg-white dark:shadow-none shadow-md shadow-slate-400 dark:bg-gray-600  dark:text-slate-100`} type="text" /></div>
        <div id='selection-container-div'> {/* selection div */}
          <select onChange={Regions} name='region' className=' dark:bg-gray-600 w-fit rounded-md p-3 dark:text-slate-100 text-left'  id="">
            <option selected disabled value="">Filter By Regions ...</option>
            <option  value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

        </div>

      </div>


      <div id='universal-cotent-div'> {/* content div */}

      {DisplayWhich == 'region' ? 
          <div  id='hosting-cardSpesific-div'>
                  <div className=''><button onClick={() => setDisplayWhich('all')} className=' text-lg font-semibold'>Back</button></div>
                  {ShowRegion == 'spec' ? <div id='hosting-SpeCard-div'><SpesificCard /></div> : ShowRegion == 'Region' ?  <div id='hosting-SpecRegion-div'><SpesificRegion /></div> : ShowRegion == 'borderClick' ? <div id='hosting-SpeCard-div'> <BorderClicked /></div> :<p>amega</p>  }
          </div> : DisplayWhich == 'all' ?
          
          <div  id='hosting-cardAll-div'>
                {allCards}
          </div>  : DisplayWhich == 'one' ?
           <div id='hosting-clicked-div'>
                  <div className=''><button onClick={() => setDisplayWhich('all')} className=' text-lg font-semibold'>Back</button></div>
                            <ClickedOne />
                      </div> :  ''}

      </div>
   </div>
  </div>
   


   
   
   </>
  )
}

export default App
