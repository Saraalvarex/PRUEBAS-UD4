        class Producto{
            constructor(nombre, precio){
                this._nombre=nombre
                this._precio=precio
            }
    
            get nombre() {
                return this._nombre
            }
            set nombre(valor){
                this._nombre=valor
            }
            get precio() {
                return this.precio
            }
            set precio(valor){
                this.precio=valor
            }
            toString(){
                return "Nombre: "+this._nombre + ", precio: " + this._precio
            }
            completarInfo(){
                this._nombre='pepe'
                this._precio='55 euros'
            }
        }
    
        Producto.prototype.hacerAlgo = function(nombre) {
            return "Nombre: "+nombre
        }
            
    
    class TV extends Producto{
            constructor(nombre, precio, anio){
                super(nombre, precio)
                this._anio=anio
            }
            get anio(){
                return this._anio
            }
            set anio(valor){
                this.anio=valor
            }
            //FUNCIONES ESTATICAS
            /*static ProductomasIva(){
                return this._precio*1.21
            }*/
    
            toString(){
                return super.toString()+ ". Anio: "+this._anio
            }
    
            completarInfo(){
                super.completarInfo()
                this._anio='2022'
            }
        }
    
        let tele1= new TV()
        tele1.completarInfo()
        console.log(tele1.toString())
       
