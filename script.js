equacoesLug = document.querySelector('.btnLug')
bissecBtn = document.querySelector('.btnBissec')
btnFalsa = document.querySelector('.btnFalsa')

aLug = document.querySelector('#aLug')
bLug = document.querySelector('#bLug')

aBissec = document.querySelector('#aBissec')
bBissec = document.querySelector('#bBissec')

aFalseP = document.querySelector('#aFalseP')
bFalseP = document.querySelector('#bFalseP')


equacoesLug.addEventListener('click',() =>{
      valor = document.querySelector('#eqLug').value
      arr = Array.from(document.querySelectorAll('.equations'))
      if(document.querySelectorAll('.equations')[0]){
        for(let i = 0; i<=arr.length - 1 ;i++)
            arr[i].remove()
      }
        

       //4*Math.pow(x,2) - 17*x - 153.07
      // document.querySelector('.mostraEqLug').insertAdjacentHTML(`beforeend`,`
      //       <script> 
      //           document.querySelector('#testando').innerText = 1000;
      //           document.querySelector('#bLug').value = 1000;
      //       </script>
      // `)
      func  = x =>{
        return (eval(valor))  
      }

      indexCol = 0
      for(let i = aLug.value; i<=bLug.value; i++)
        {
          document.querySelector('.mostraEqLug').insertAdjacentHTML(`afterbegin`,
          `
          <div class = "equations">
              X = ${i} | Valor = ${func(i)}
          </div> 
          `)
         if(func(i) < 0)
         {
           document.querySelectorAll('.equations')[indexCol].classList.add('negative')
         } 
         else {
           document.querySelectorAll('.equations')[indexCol].classList.add('positive')
         }
         indexCol+=indexCol
      }

    })
    
bissecBtn.addEventListener('click',() =>{
      valor = document.querySelector('#eqBissec').value
      arr = Array.from(document.querySelectorAll('.bissecValues'))
      indexBissec = -1
      
      if(document.querySelectorAll('.bissecValues')[0]){
        for(let i = 0; i<=arr.length - 1 ;i++)
            arr[i].remove()
      }

      funcBi  = x =>{
        return (eval(valor))  
      }

      arrBissecVals = [[]]
      aBi = aBissec.value
      bBi = bBissec.value
      
      bissecCalculator(aBi,bBi)

      for(let i = 0; i<arrBissecVals.length - 1; i++)
      {
        document.querySelector('.bissecValuesContainer').insertAdjacentHTML(`beforeend`,
             `
            <div class = "bissecValues">
               <p>Iteracao = ${i} | a = ${arrBissecVals[i][0]} | b = ${arrBissecVals[i][1]} 
                                  | Comprimento = ${arrBissecVals[i][1] - arrBissecVals[i][0]}</p> 
            </div> 
            `)
      }
    })

// func_2 = (x) => 4*Math.pow(x,2) - 17*x - 153.07
// func_3 = (x) => 4*Math.sin(3*x) + 18*(Math.sqrt(Math.pow(x,2))) - 39.5


function bissecCalculator(a,b)
{
    a2 = parseFloat(a)
    b2 = parseFloat(b)
    let xn = (a2+b2)/2

    if(indexBissec <= 6){
        if(funcBi(a2)*funcBi(xn) > 0 )
        {
          indexBissec++
          console.log(`Iteracao: ${indexBissec} | Intervalo: [${a2}, ${b2}]`)
          arrBissecVals[indexBissec] = [a2,b2]
          bissecCalculator(xn,b2)
      }else if(funcBi(a)*funcBi(xn) < 0){
          indexBissec++
          console.log(`Iteracao: ${indexBissec} | Intervalo: [${a2}, ${b2}]`)
          arrBissecVals[indexBissec] = [a2,b2]
           bissecCalculator(a2,xn)
      }
    }else if(indexBissec > 6){
        indexBissec++
        console.log(`Iteracao Final: ${indexBissec} | Intervalo: [${a2}, ${b2}]`)
        return
    } 
}



btnFalsa.addEventListener('click',() =>{

      valor = document.querySelector('#eqFalseP').value
      arr = Array.from(document.querySelectorAll('.falsePValues'))
      indexFP = -1
      
      if(document.querySelectorAll('.falsePValues')[0]){
        for(let i = 0; i<=arr.length - 1 ;i++)
            arr[i].remove()
      }

      funcFP  = x =>{
        return (eval(valor))  
      }

      arrFalsePVals = [[]]
      aFaP = aFalseP.value
      bFaP = bFalseP.value
      xnAnterior = 0
      error = []
      
      posicaoFalsaCalculator(aFaP,bFaP,funcFP)

      for(let i = 0; i<arrFalsePVals.length - 1; i++)
      {
        document.querySelector('.falsePValuesContainer').insertAdjacentHTML(`beforeend`,
             `
            <div class = "falsePValues">
               <p>Iteracao = ${i} | 
                  <span > a = ${arrFalsePVals[i][0]} | </span> 
                  <span > b = ${arrFalsePVals[i][1]} | </span>
                  <span style = "color: green"> Comprimento(b-a) =  ${arrFalsePVals[i][1] - arrFalsePVals[i][0]}</span></p> 
            </div> 
            `)
      }
    })

// func_4 = (x) => 4*Math.pow(x,2) - 17*x - 153.07
// func_5 = (x) => 4*Math.sin(3*x) + 18*(Math.sqrt(Math.pow(x,2))) - 39.5

let posicaoFalsaCalculator = function(a,b,funcMee){
  a2 = parseFloat(a)                                                                                          
  b2 = parseFloat(b)
  funcMe = funcMee

	xn = (a2*funcMee(b2) -  b2*funcMee(a2))/(funcMee(b2)-funcMee(a2))
  error[indexFP] = Math.abs(xn - xnAnterior)
	if(indexFP <= 6)
	{
	  if(funcMee(a2)*funcMee(xn)<0){
		indexFP++
    console.log (`Iteracao: ${indexFP} | Intervalo: [${a2}, ${b2}]`)
    arrFalsePVals[indexFP] = [a2,b2]
    xnAnterior = xn
		posicaoFalsaCalculator(a2,xn,funcMe)
	  }
	  else if(funcMee(a2)*funcMee(xn)>0){
		indexFP++
		console.log (`Iteracao: ${indexFP} | Intervalo: [${a2}, ${b2}]`)
    arrFalsePVals[indexFP] = [a2,b2]
    xnAnterior = xn
		posicaoFalsaCalculator(xn,b2,funcMe)
	  }
	}
	else if(indexFP > 6)
	{
		console.log (`Iteracao Final: ${indexFP} | Intervalo: [${a2}, ${b2}]`)
		return
  }
}