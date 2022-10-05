import React ,{useState, useEffect} from 'react';
import imagenFondo from '../assets/images/stormtrooper.jpg' // CORREGIR IMG





function ContentRowTop(){
	const urlUsers = "http://localhost:3000/api/users"
	const urlProducts = "http://localhost:3000/api/products/total"
	const urlMarcas = "http://localhost:3000/api/marcas"
	const [users,setUsers] = useState([])
	useEffect(() => {
		fetch(urlUsers)
		  .then((res) => res.json())
		  .then((meta)=>  (setUsers(meta.meta.total)));
		  },[])
	const [marcas,setMarcas] = useState([])
		useEffect(() => {
		fetch(urlMarcas)
		  .then((res) => res.json())
		  .then((meta)=>  (setMarcas(meta.meta.total)));
		  },[])
	const [marcas2,setMarcas2] = useState([])
		useEffect(() => {
		fetch(urlMarcas)
		  .then((res) => res.json())
		  .then((meta)=>  (setMarcas2(meta.data.nombre)));
		  },[])
	const [productos,setProducts] = useState([])
		useEffect(() => {
		fetch(urlProducts)
		  .then((res) => res.json())
		  .then((meta)=>  (setProducts(meta.meta.total)))
		  
		//   setUsers(response.meta.todosUsers)
	},[])
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Martech's Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*<!-- Movies in Data Base -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Productos totales</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800" >{productos}</div>  {/*<!-- acá se completa con un find by pk o similar -->*/}
										</div>
										<div className="col-auto">
											<i className="fas fa-film fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Total awards -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Marcas</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{marcas}</div> {/*<!-- acá se completa con un find by pk o similar -->*/}
										</div>
										<div className="col-auto">
											<i className="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Actors quantity -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1"> Usuarios registrados
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{users}</div> {/*<!-- acá se completa con un find by pk o similar -->*/}
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último celular en venta</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del equipo</a> {/*<!-- acá se completa con un find by pk o similar  sumando la description del producto-->*/}
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Marcas en la base de datos</h5>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
												{marcas2[0]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
												{marcas2[1]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
												{marcas2[2]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
												{marcas2[3]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
												{marcas2[4]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
												{marcas2[5]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
												{marcas2[6]}
												</div>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;