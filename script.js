const f= document.getElementById("data");
function printDocument(){
    const backup=document.body.innerHTML;
    document.body.innerHTML=`<main>${document.querySelector("main").innerHTML}</main>`;
    window.print();
}
f.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ab=document.getElementById("browser").value;
    const name=document.getElementById('name').value;
    const add=document.getElementById("address").value;
    const feet=document.getElementById("feet").value;
    const rate=document.getElementById('rate').value;
    const date= new Date();
    const print =document.createElement('button');
    print.classList.add('button');
    print.textContent='print';
    const btnsection= document.querySelector('.btn');
    btnsection.innerHTML="";
    btnsection.appendChild(print);
    print.addEventListener('click',printDocument);
    document.querySelector("main").innerHTML=`
    <div class="logo"><img src="logo.png" alt=""></div>
<h2 class="company-name">
Giant Waterproofing Co.
</h2>
<div class="reg-date">
    <div class="reg-num">GWC/R/16776/2022</div>
    <div class="date"><span class="dd">${(date.getDate()<10)?'0'+date.getDate():date.getDate()}</span>.<span class="mm">${((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):date.getMonth()+1}</span>.<span class="yyyy">${date.getFullYear()}</span></div>
</div>
<div class="name-add">
    <h3 class="name">${ab+' '+name}</h2>
    <h3 class="address">${add}</h2>
</div>
<h4 class="title">Re: Waterprofing on Roof</h2>
<h4 class="salutation">Dear sir,</h2>
<p class="msg">
<p style="margin-top:20px;">
    We thank you very much for your kind inquiry for waterproofing on Roof area. <strong>Giant</strong> is a leading waterproofing expert assuring the right waterproofing solutions for <strong>leak-free homes </strong>
    with the best waterproofing <strong>services in India</strong>.
</p>
<p style="margin-top:20px;">
    <strong> Giant’s 5 Layer Waterproofing treatment </strong>is a Waterproofing technique designed and
    developed for a
    complete <strong>waterproofing solution with leakage free warranty for 7 years.</strong> This system
    can be applied for
    Waterproofing on RCC surfaces, Side Walls, Asbestos sheets, Tin Sheets, Water Tanks etc
</p>
<h3 style="margin-top:20px; text-decoration: underline;
">Description of Chemicals:</h3>
<dl class="chem-des">
    <ol>
        <li>
            <dt>
                RainSiler :
            </dt>
            <dd>
                 <strong>RainSiller is a reactive organosilane based waterproofing agent that seals upto nano-pore level.</strong> It has an ability to penetrate upto 2 mm deep inside the substrate and becomes a permanent integral part of the structure. It reacts and converts the hydrophilic chemical groups of the substrate into hyrdrophobic groups. RainSiller is water dilutable, safe, sprayable and easy to apply. RainSiller is non-leachable, UV resistant, breathable and does not present peel-off issues unlike conventional polymer coatings.
        </li>
        <li>
            <dt>
                RainPrime :
            </dt>
            <dd><strong>RainPrime is an acrylic co-polymer emulsion supplied as a ready to use bonding agent</strong> with superior wet adhesion and universal compatibility. It is also a versatile latex that can be used as a cement modifier for spalled concrete slabs, overhangs, beams, columns and floors. It is also used as a bonding primer and porosity filler with RainSiller during waterproofing applications.</dd>
        </li>

        <li>
            <dt>
                Elastomeric:
            </dt>
            <dd>
                <strong>Giant Elastomeric is a high performance elastomeric membrane for crack bridging.</strong> 
                It features curing through crosslinking and is highly UV durable. 
                It features ability to elongate upto 250 percent. 
                It can be used on variety of substrates as a mortar mix with sand and cement.
            </dd>
        </li>
    </ol>
</dl>
</p>
<h2 class="procedure">Waterproofing with Procedure (5 layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with wire brush & other mechanical tools to remove dust, and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on Basement by
        RainPrime with cement.</li>
    <li>Apply 1st Coat.( Neno Coat) Giant RainPrime and RainSiller.</li>
    <li>Apply 2nd coating of Giant Fibermesh.</li>
    <li>Apply 3rd & 4th coating of Giant RainPrime with cement dilution (Highly waterproofing & crack
        resistant coating).</li>
    <li>Apply 5th coating of Elastomeric with cement without dilution. Highly waterproofing &
        crack resistant coating).</li>
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate} </span>=<span class="total">&#x20B9;${feet*rate}</span></h2>

<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">All details provided by candidate via tele-communication is considered in this document. If any changes found while measuring area on site, then that area will be considered in contract and amount will changed accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td><strong>Product</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><strong>RainSiller</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>RainPrime</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>Elastomeric</strong></td>
        </tr>
        <tr>
            <td>4</td>
            <td><strong>Fibermesh</strong></td>
        </tr>
        <tr>
            <td>5</td>
            <td><strong>Cement</strong></td>
        </tr>
    </tbody>
</table>
<div class="t-and-d">
    <h2>Terms and Conditions</h2>
    <p>
        <dl>
            <ol>
                <li>
                    <dt>Taxes:</dt>
                    <dd><strong>18 % GST Extra.</strong></dd>
                </li>
                <li>
                    <dt>Payment Terms:</dt>
                    <dd><strong>100 % Materials Advance</strong> along with work order. Balance Amount complete  work.</dd>
                </li>
                <li>
                    <dt>Transport Fee Extra</dt>
                    <dd></dd>
                </li>
                <li>
                    <dt>Validity:</dt>
                    <dd>Our quotation is valid for a period of 12 days from this date and validitythereof is subject our final confirmation.</dd>
                </li>
                <li>
                    <dt>General:</dt>
                    <dd>We need your co-operation to provide us safe space for storing our materials,during the work.</dd>
                </li>
                <li>
                    <dt>Kindly note that the actual measurement will be in line with the Industrial standards.</dt>
                    <dd>The above work shall be completed as per schedule mutually discussedand agreed, to avoid inconvenience place the order well in advance.</dd>
                </li>
                <li>
                    <dt>Completion:</dt>
                    <dd>
                        The above work shall be completed as per schedule mutually discussedand agreed, to avoid inconvenience place the order well in advance.
                        <ol>
                            <li>
                                The work order and advance must be allowed 15 working Days prior to the date of commencement of work. To arrange the materials and utilities.
                            </li>

                            <li>
                                Kindly ensure the work area to be available on time so that our workmen’s idle and other inconvenience in service can be avoided.
                            </li>
                        </ol>
                    </dd>
                </li>
                <li>
                    <dt>Water and Electricity:</dt>
                    <dd>Necessary construction water and power required forexecution of our work should be provided free of cost by you.</dd>
                </li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty : 7 Years (Seven Years) (from the date of completion of the work )
                </h4>
            
        </dl>
    </p>
    <div class="company-details">
        <h2>Bank Account Details[HDFC Bank]</h2>
        <h3>Name: Giant WaterProofing Co.</h3>
        <h3>A/C No: 50200069668033</h3>
        <h3>IFSC Code: HDFC0005386</h3>
    </div>
    <div class="qr-code">
        <img src="qr.jpg" alt="">
    </div>
    <div class="contact">
        <h3>Contact US</h3>
        <p class="contact-details">
            Name: <span class="name">Giant Sales Team</span>
            Mobile: <span class="mobile">+919111469300</span>
            Email: <span class="email">info@giant.com.co</span>
            Website: <span class="website">www.giantwaterproofing.in</span>
        </p>
    </div>
    <div class="footer">
        <h2>Address</h2>
        <p class="address"><strong>HEAD OFFICE</strong>: Giant Waterproofing Co. Office at Lal Bahadur Shastri Rd, Kismat Nagar, Kurla, Mumbai, Maharashtra 400070</p>
    </div></div>
    `;
});
