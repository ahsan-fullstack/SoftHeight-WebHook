import { use, useEffect, useState } from "react"

export const CardComponent = () => {
  const [form, setForm] = useState({
    eventType: '',
    eventId: '',
    createdAt: new Date().toISOString(),
    cardNumber: 0,
    exp: '',
    data: {
      customer: {
        name: '',
        email: '',
      },
      payment: {
        transactionId: '',
        amount: 0,
        status: 'succeeded',
        currency: 'usd',
      }
    }
  })

  const handleCustomerProperties = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        customer: { ...prev.data.customer, [name]: value }
      }
    }))
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handlePaymentProperties = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        payment: {
          ...prev.data.payment,
          [name]: value
        }
      }
    }))
  }

  const submitForm = async () => {
    const { name, email } = form.data.customer;
    const { amount } = form.data.payment;
    const { exp } = form;

    if (!name || !email || (!amount || amount < 0) || !exp) {
      alert('Please fill all the fields')
      return;
    }

    const payload = {
      eventType: form.eventType,
      eventId: form.eventId,
      createdAt: form.createdAt,
      exp: new Date(form.exp).toISOString(),
      cardNumber: form.cardNumber,
      data: {
        customer: {
          name: form.data.customer.name,
          email: form.data.customer.email,
        },
        payment: {
          cardNumber: form.cardNumber,
          transactionId: form.data.payment.transactionId,
          amount: form.data.payment.amount,
          status: form.data.payment.status,
          currency: form.data.payment.currency,
        }
      }
    }

    console.log(payload, 'payload');

    const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'key': `${import.meta.env.VITE_SECRET_KEY}`
      },
      body: JSON.stringify(payload)
    })
    const res = await result.json();
    console.log(res);
  }

  return (
    <>
      <div className="main-wrapper h-[100vh] flex items-center justify-center">
        <div className="card-container w-[50%]">
          <div className="customer flex items-center justify-between mb-3" >
            <input type="text" name="name" id="" placeholder="Name" onChange={handleCustomerProperties} />

            <input type="email" name="email" id="" placeholder="Email" onChange={handleCustomerProperties} />
          </div>

          <div className="customer flex items-center justify-between mb-3" >
            <input type="text" name="eventId" id="" placeholder="Event Id" value={form.eventId} onChange={handleInput} />

            <input type="text" name="eventType" id="" placeholder="Event Type" value={form.eventType} onChange={handleInput} />
          </div>

          <div className="payment-wrapper flex items-center flex-wrap justify-between gap-3 mb-3">
            <input type="text" name="cardNumber" id="" placeholder="Enter Card Number" value={form.cardNumber} onChange={handleInput} />

            <input type="text" name="transactionId" id="" placeholder="Transcation Id" value={form.data.payment.transactionId}
              onChange={handlePaymentProperties} />
          </div>

          <div className="flex items-center flex-wrap justify-between gap-3 mb-3">
            <input type="datetime-local" name="exp" onChange={handleInput} id="" placeholder="Expiry date" />

            <input type="number" name="amount" id="" placeholder="Enter Amount"
              onChange={handlePaymentProperties} />
          </div>

          <div className="flex items-center flex-wrap justify-between gap-3">
            <input type="text" name="createdAt" id="" placeholder="CreatedAt" value={form.createdAt}
              onChange={handleInput} />

            <input type="text" name="currency" id="" placeholder="Currency" value={form.data.payment.currency}
              onChange={handlePaymentProperties} />
          </div>
          <button className="border border-gray-500 px-6 py-2 m-5 cursor-pointer"
            onClick={submitForm}
          >PayNow</button>
        </div>
      </div>
    </>
  )
} 