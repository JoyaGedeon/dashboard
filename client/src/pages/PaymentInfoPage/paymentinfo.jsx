import { Navbar } from "../../components/LandingNav/navbar"

const PaymentInfo = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <h1>Payment Info</h1>
        <main style={{display:"flex"}}>
            <section class="paymentinfo" style={{flex: "50%"}}>
                <h2>Payment Info</h2>
                <form style={{display:"flex", flexDirection:"column", height:"45vh"}}>
                    <label for="cardnumber">Card Number</label>
                    <input type="cardnumber" name="cardnumber" id="cardnumber" placeholder="Card Number" />
                    <label for="expirationdate">Expiration Date</label>
                    <input type="expirationdate" name="expirationdate" id="expirationdate" placeholder="Expiration Date" />
                    <label for="cvv">CVV</label>
                    <input type="cvv" name="cvv" id="cvv" placeholder="CVV" />
                    <label for="zipcode">Zip Code</label>
                    <input type="zipcode" name="zipcode" id="zipcode" placeholder="Zip Code" />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>

    </div>
  )
}

export default PaymentInfo;
