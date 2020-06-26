interface OperationResponse {
	isSuccess: boolean
	error?: string
}

// CRUD - create, read, update, delete

interface IDatabaseManager { //abstract interface
	DBUrl: string;
	
	create(model: any): Promise<OperationResponse>
	
	read(id: string): Promise<OperationResponse>
	
	update(id: string): Promise<OperationResponse>
	
	delete(id: string): Promise<OperationResponse>
}


//concrete class / implementation
class LocalStorageManager implements IDatabaseManager {
	DBUrl: string;
	
	create(model: any): Promise<OperationResponse> {
		return Promise.resolve({isSuccess: true});
	}
	
	delete(id: string): Promise<OperationResponse> {
		return Promise.resolve({isSuccess: true});
	}
	
	read(id: string): Promise<OperationResponse> {
		return Promise.resolve({isSuccess: true});
	}
	
	update(id: string): Promise<OperationResponse> {
		return Promise.resolve({isSuccess: true});
	}
	
}

let localStorageManager = new LocalStorageManager();


