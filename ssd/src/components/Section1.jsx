import dayjs from "dayjs"
export default function Section1() {
    const socksCost = 10;
    const tshirtCost = 8;
    const totalCost = socksCost + (tshirtCost * 2);
    const shippingCost = 5;
    // console.log(totalCost);
    const dates = dayjs().format('MMMM D')
    // console.log(dates)


    function timer() {
        setInterval(() => {
            console.log(dayjs().format('HH:mm:ss'))
        }, 10000)
    }
    //timer()
    return (
        <div className="main">
            <button>Good Job</button>
            <p>My Name is Hayes</p>
            <section>
                <h4>Cotton Socks</h4>
                <h4>Price:$10</h4>
                <button>Add to Cart</button>
            </section>
            <section>
                <h5> Product Cost :$ {totalCost} <br /></h5>
                <h5>shipping Cost:$ {shippingCost}<br /></h5>
                <h5>Total Cost: ${totalCost + shippingCost}<br /></h5>
                <h5><button>Place your Order</button><br /></h5>
                <h5>Today is {dates}</h5>
                <h5>The Time  is {dayjs().format('HH:mm:ss')}</h5>
            </section>
            <section className="clock">
                {/* {time} */}
            </section>
        </div>
    )
}