const seform = document.getElementById('movsea')
const ollis = document.querySelector("#movlis")
const btn = document.querySelector('button')
function addmov(data)
{
    for (let el of data)
    {
        const carddiv = document.createElement('div')
        carddiv.classList = "card m-2 wid has-background-dark"
        const imgel = document.createElement('img')
        imgel.classList = "card-img-top"
        const bdydiv = document.createElement('div')
        bdydiv.classList = "card-body"
        const bdyttl = document.createElement('h5')
        bdyttl.classList= "card-title has-text-light"
        const psumm = document.createElement("p")
        psumm.classList = "card-text has-text-success"
        const crdul = document.createElement('ul')
        crdul.classList = "list-group list-group-flush has-background-dark"
        const rtngli = document.createElement('li')
        rtngli.classList ="list-group-item"
        const laugli = document.createElement('li')
        laugli.classList ="list-group-item"
        
        if (el.show.name)
            bdyttl.textContent = el.show.name
        else
            bdyttl.textContent = 'Not Found'
        if (el.show.image)
            imgel.src = el.show.image.medium
        else
            imgel.src = 'https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg'
        if (el.show.summary)
            psumm.innerHTML = el.show.summary
        else
            psumm.innerHTML = 'Not Found'
        if (el.show.rating.average)
            rtngli.textContent = `Ratting : ${el.show.rating.average}`
        else
            rtngli.textContent = 'Not Found'
        if (el.show.language)
            laugli.textContent = `Language : ${el.show.language}`
        else
            laugli.textContent = 'Not Found'
        
        bdydiv.append(bdyttl)
        bdydiv.append(psumm)
        crdul.append(rtngli)
        crdul.append(laugli)
        carddiv.append(imgel)
        carddiv.append(bdydiv)
        carddiv.append(crdul)
        ollis.append(carddiv)

    }
    btn.classList.remove("is-loading")
    btn.disabled = false
}

function fthmov(serhda)
{
    btn.classList.add("is-loading")
    btn.disabled = true
    ollis.innerHTML=''
    console.log(serhda)
    const conf = {params : { q : serhda}}
    axios.get("http://api.tvmaze.com/search/shows" , conf)
            .then(res => addmov(res.data))
            .catch(e => 
                {
                    alert("CLick again!! Some Error Occured")
                    btn.classList.remove("is-loading")
                    btn.disabled = false
                })
}

seform.addEventListener('submit' , function(e) 
{
    e.preventDefault()
    console.dir(seform.elements.query.value)
    const srch = seform.elements.query.value
    fthmov(srch)
})
