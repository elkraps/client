import {makeAutoObservable} from "mobx"


export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Sneakers'},
            {id: 2, name: 'T-Shirts'},
            {id: 3, name: 'Hoddies'},
        ]
        this._brands = [
            {id: 1, name: "Nike"},
            {id: 2, name: "Adidas"},
            {id: 3, name: "Yeezy"},
                  
        ]
        this._devices = [
            {id: 1, name: "Nike AF1", price: "2000000", img: ''},
            {id: 2, name: "Yeezy Boosts", price: "1231412", img: `https://pixnio.com/media/garbage-metal-soil-ground-pollution`},
            {id: 3, name: "Adidas Originals Hoodie", price: "202020", img: `https://pixnio.com/media/garbage-metal-soil-ground-pollution`},
            {id: 4, name: "Nike AirMax", price: "202020", img: `https://pixnio.com/media/garbage-metal-soil-ground-pollution`},
            {id: 5, name: "Nike Running", price: "202020", img: `https://pixnio.com/media/garbage-metal-soil-ground-pollution`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this) // теперь при изменение компоненты будут перерендеривоца
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    
    setSelectedType(type) {
        this._setSelectedType = type
    }

    setSelectedBrand(brand) {
        this._setSelectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}

