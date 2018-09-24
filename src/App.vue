<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-sm-7">
					<p class="lead">Product Cart</p>
					<table class="table">
						<thead class="thead-light">
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Quantity</th>
								<th scope="col">Price</th>
								<th scope="col">Remove</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Learn Node</td>
								<td><input type="number" class="form-control" min="1" style="width:100px" value="1" /> </td>
								<td>$10.0</td>
								<td>
									<button class="btn btn-danger"> Remove</button>
								</td>
							</tr>
						</tbody>
					</table>
					<hr/>
					<button class="btn btn-success btn-lg">
						Checkout
						<span>($)</span>
					</button>
				</div>
				<div class="col-sm-5">
					<div class="card product-card">
						<div class="card-header">
							Sugher Microphone
						</div>
						<div class="card-body">
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<p class="text-primary"> $99 </p>
							<button class="btn btn-primary">Add to Cart</button>
						</div>
					</div>
					<div class="card">
						<div class="card-header">
							Amazon Kindle
						</div>
						<div class="card-body">
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<p class="text-primary"> $79 </p>
							<button class="btn btn-primary">Add to Cart</button>
						</div>
					</div>
					<div class="card">
						<div class="card-header">
							Iphone X
						</div>
						<div class="card-body">
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<p class="text-primary"> $89 </p>
							<button class="btn btn-primary">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style >
.product-card {
	margin-bottom: 10px;
}
</style>
