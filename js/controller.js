var con=angular.module('storeApp');


con.controller('generalController', function($scope){
	$scope.generalSettings = [
	{productStoreId:'9000',currency:'USD',weight:'WT_lb',cogsMethodId:'Average Cost',salesOrderIdPrefix:'NN',salesOrderId:'123456', purchaseOrderIdPrefix:'PO',purchaseOrderId:'123456'},
	{alternateSupplier:'INVRO_ALT_SUPL'}
	
	];
});