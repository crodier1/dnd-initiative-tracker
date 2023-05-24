import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'




function App() {   

  function addCharacter(){   

    let newCharatcer = {id: uuidv4(), initative: "", name: "", hp: "", ac: ""};
    
    setCharacters([...characters, newCharatcer])

      localStorage.setItem('iniative',JSON.stringify([...characters, newCharatcer]))
    
  }

  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  const [characters, setCharacters] = 
    useState(JSON.parse(localStorage.getItem('iniative')) == null ? [] : JSON.parse(localStorage.getItem('iniative')))

  return ( 
    <>
      <div className="container mt-3">        
      
      <table className="table">
      
        <thead>
          <tr>
            <th scope="col">Initiative</th> 
            <th scope="col">Name</th>   
            <th scope="col">HP</th>  
            <th scope="col">Armor Class</th>  
            <th scope="col"></th>       
          </tr>
        </thead>

        <tbody>
          {characters.map(c=> {return <tr key={c.id}>
              <th scope='row' key={c.id}>
              
                <input 
                id={"initiative"} 
                type="text" 
                placeholder='Initiative'
                className="form-control" 
                value={c.initative}                
                  onChange={(event) => 
                    { 

                      setCharacters([...characters.map(character=> {
                        if(character.id != c.id){
                          return character
                        }

                        return {...character, initative: event.target.value}
                      })
                      ].sort((a,b) => b.initative - a.initative)); 
                      
                      localStorage.setItem('iniative', JSON.stringify(characters.map(char => {
                        if(char.id != c.id){
                          return char
                        }
                        
                        return {...char, initative: event.target.value}
                      })));  
              }}
                />
               
            </th>
            <th>
              <input id={"name"} type="text" className="form-control" placeholder='Name'
                value={c.name}
                onChange={event => {

                  setCharacters([...characters.map(character=> {
                    if(character.id != c.id){
                      return character
                    }

                    return {...character, name: event.target.value}
                  })
                  ].sort((a,b) => b.initative - a.initative)); 
                  
                  localStorage.setItem('iniative', JSON.stringify(characters.map(char => {
                    if(char.id != c.id){
                      return char
                    }
                    
                    return {...char, name: event.target.value}
                  }))); 
                }}
              />
            </th>

            <th>
              <input id={"hp"} type="number" className="form-control" placeholder='HP'
              value={c.hp}
              onChange={event => {

                setCharacters([...characters.map(character=> {
                  if(character.id != c.id){
                    return character
                  }

                  return {...character, hp: event.target.value}
                })
                ].sort((a,b) => b.initative - a.initative)); 
                
                localStorage.setItem('iniative', JSON.stringify(characters.map(char => {
                  if(char.id != c.id){
                    return char
                  }
                  
                  return {...char, hp: event.target.value}
                }))); 
              }}

              />
            </th>

            <th>
              <input id={"ac"} type="number" className="form-control" placeholder='AC'
                value={c.ac}
                onChange={event => {

                  setCharacters([...characters.map(character=> {
                    if(character.id != c.id){
                      return character
                    }
  
                    return {...character, ac: event.target.value}
                  })
                  ].sort((a,b) => b.initative - a.initative));  
                  
                  localStorage.setItem('iniative', JSON.stringify(characters.map(char => {
                    if(char.id != c.id){
                      return char
                    }
                    
                    return {...char, ac: event.target.value}
                  }))); 
                }}
              />
            </th>

            <th>
              <button type='button' className="btn btn-outline-danger"
                onClick={()=> {
                  setCharacters(characters.filter(character => character.id != c.id))
                  localStorage.setItem('iniative',JSON.stringify(characters.filter(character => character.id != c.id)))
                }}
              >X</button>
            </th>  

          </tr>
        
        })}

        </tbody>
      </table>

      <button onClick={addCharacter} className="btn btn-primary" type='button'>+</button>
      </div>
    </>

  )
}



export default App
