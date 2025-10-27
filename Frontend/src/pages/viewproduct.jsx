import { useEffect, useState } from 'react'



export default function ViewProduct() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const handleDelete= async(id) => {
    try{
      const res=await fetch(`http://localhost:3000/api/products/${id}`,{
        method: 'DELETE',
      })
      if(res.ok){
        setProducts(products.filter((p) => p._id!==id))
        alert('Product deleted successfully');
      }else{
        alert('Failed to delete product')
      }
    }
      catch(error){
        console.error('Error deleting product:',error);
        alert('Error connecting to server')

      }
    
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products') // replace with your backend URL
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
      alert('Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  return (
    
    <div>
     
      <h1>Product Page</h1>
      {loading ? (<p>loading...</p> ): products.length === 0 ? (<p>No products found</p>):(
        <div style={{display: 'flex',flexWrap: 'wrap',gap:'20px'}}>{products.map((product) => (
    <div className="card" key={product._id} style={{width: '18rem'}}>
      <img src={product.image} className="card-img-top" alt="..." style={{ width: '18rem', height: '18rem', objectFit: 'cover' }}/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
    </div>
    </div>
  
   ))}
</div>
      )}
</div>
      
 

)
}
