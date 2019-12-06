import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class PCFGroup implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _csscontainer: HTMLDivElement;

	private _blueRadio : HTMLInputElement;
	private _blueLabel : HTMLLabelElement;

	private _redRadio : HTMLInputElement;
	private _redLabel : HTMLLabelElement;

	private _greenRadio : HTMLInputElement;
	private _greenLabel : HTMLLabelElement;

	private _resetRadio : HTMLInputElement;
	private _resetLabel : HTMLLabelElement;

	private _tileblue1: HTMLDivElement;
	private _tilered2: HTMLDivElement;
	private _tileblue3: HTMLDivElement;
	private _tilegree4: HTMLDivElement;
	private _tilered5: HTMLDivElement;
	private _tileblue6: HTMLDivElement;
	private _tilered7: HTMLDivElement;
	private _tilegreen8: HTMLDivElement;
	private _tileblue9: HTMLDivElement;
	private _tilegreen10: HTMLDivElement;

	private _tilered11: HTMLDivElement;
	private _tilegreen12: HTMLDivElement;
	private _tileblue13: HTMLDivElement;
	private _tilegree14: HTMLDivElement;
	private _tileblue15: HTMLDivElement;
	private _tilegreeb16: HTMLDivElement;
	private _tilered17: HTMLDivElement;
	private _tilegreen18: HTMLDivElement;
	private _tileblue19: HTMLDivElement;
	private _tilegreen20: HTMLDivElement;	

	private _tileblue21: HTMLDivElement;
	private _tilegreen22: HTMLDivElement;
	private _tilered23: HTMLDivElement;
	private _tilegree24: HTMLDivElement;
	private _tilered25: HTMLDivElement;
	private _tileblue26: HTMLDivElement;
	private _tilered27: HTMLDivElement;
	private _tilegreen28: HTMLDivElement;
	private _tilegreen29: HTMLDivElement;
	private _tilered30: HTMLDivElement;	

	private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
		this._container = container;

		this._csscontainer = document.createElement("div");

		this._blueRadio = document.createElement("input");
		this._blueRadio.setAttribute("type","radio");
		this._blueRadio.setAttribute("id","blue");
		this._blueRadio.setAttribute("name","color");

		this._redRadio = document.createElement("input");
		this._redRadio.setAttribute("type","radio");
		this._redRadio.setAttribute("id","red");
		this._redRadio.setAttribute("name","color");

		this._greenRadio = document.createElement("input");
		this._greenRadio.setAttribute("type","radio");
		this._greenRadio.setAttribute("id","green");
		this._greenRadio.setAttribute("name","color");

		this._resetRadio = document.createElement("input");
		this._resetRadio.setAttribute("type","radio");
		this._resetRadio.setAttribute("id","reset");
		this._resetRadio.setAttribute("name","color");

		this._blueLabel = document.createElement("label");
		this._blueLabel.setAttribute("for","blue");
		this._blueLabel.textContent = "Fully Booked";

		this._redLabel = document.createElement("label");
		this._redLabel.setAttribute("for","red");
		this._redLabel.textContent = "About to get full";

		this._greenLabel = document.createElement("label");
		this._greenLabel.setAttribute("for","green");
		this._greenLabel.textContent = "Half booked";

		this._resetLabel = document.createElement("label");
		this._resetLabel.setAttribute("for","reset");
		this._resetLabel.textContent = "Show All";

		//<div class="tile blue">1</div>

		this._tileblue1 = document.createElement("div");
		this._tileblue1.setAttribute("class","tile blue");
		this._tileblue1.textContent = "1";

		this._tilered2 = document.createElement("div");
		this._tilered2.setAttribute("class","tile red");
		this._tilered2.textContent = "2";

		this._tileblue3 = document.createElement("div");
		this._tileblue3.setAttribute("class","tile blue");
		this._tileblue3.textContent = "3";

		this._tilegree4 = document.createElement("div");
		this._tilegree4.setAttribute("class","tile green");
		this._tilegree4.textContent = "4";

		this._tilered5 = document.createElement("div");
		this._tilered5.setAttribute("class","tile red");
		this._tilered5.textContent = "5";

		this._tileblue6 = document.createElement("div");
		this._tileblue6.setAttribute("class","tile blue");
		this._tileblue6.textContent = "6";

		this._tilered7 = document.createElement("div");
		this._tilered7.setAttribute("class","tile red");
		this._tilered7.textContent = "7";

		this._tilegreen8 = document.createElement("div");
		this._tilegreen8.setAttribute("class","tile green");
		this._tilegreen8.textContent = "8";

		this._tileblue9 = document.createElement("div");
		this._tileblue9.setAttribute("class","tile blue");
		this._tileblue9.textContent = "9";

		this._tilegreen10 = document.createElement("div");
		this._tilegreen10.setAttribute("class","tile green");
		this._tilegreen10.textContent = "10";

		this._tilered11 = document.createElement("div");
		this._tilered11.setAttribute("class","tile red");
		this._tilered11.textContent = "11";

		this._tilegreen12 = document.createElement("div");
		this._tilegreen12.setAttribute("class","tile green");
		this._tilegreen12.textContent = "12";

		this._tileblue13 = document.createElement("div");
		this._tileblue13.setAttribute("class","tile blue");
		this._tileblue13.textContent = "13";

		this._tilegree14 = document.createElement("div");
		this._tilegree14.setAttribute("class","tile green");
		this._tilegree14.textContent = "14";

		this._tileblue15 = document.createElement("div");
		this._tileblue15.setAttribute("class","tile blue");
		this._tileblue15.textContent = "15";

		this._tilegreeb16 = document.createElement("div");
		this._tilegreeb16.setAttribute("class","tile green");
		this._tilegreeb16.textContent = "16";

		this._tilered17 = document.createElement("div");
		this._tilered17.setAttribute("class","tile red");
		this._tilered17.textContent = "17";

		this._tilegreen18= document.createElement("div");
		this._tilegreen18.setAttribute("class","tile green");
		this._tilegreen18.textContent = "18";

		this._tileblue19= document.createElement("div");
		this._tileblue19.setAttribute("class","tile blue");
		this._tileblue19.textContent = "19";

		this._tilegreen20= document.createElement("div");
		this._tilegreen20.setAttribute("class","tile green");
		this._tilegreen20.textContent = "20";

		this._tileblue21= document.createElement("div");
		this._tileblue21.setAttribute("class","tile blue");
		this._tileblue21.textContent = "21";

		this._tilegreen22= document.createElement("div");
		this._tilegreen22.setAttribute("class","tile green");
		this._tilegreen22.textContent = "22";

		this._tilered23= document.createElement("div");
		this._tilered23.setAttribute("class","tile red");
		this._tilered23.textContent = "23";

		this._tilegree24= document.createElement("div");
		this._tilegree24.setAttribute("class","tile green");
		this._tilegree24.textContent = "24";

		this._tilered25= document.createElement("div");
		this._tilered25.setAttribute("class","tile red");
		this._tilered25.textContent = "25";

		this._tileblue26= document.createElement("div");
		this._tileblue26.setAttribute("class","tile blue");
		this._tileblue26.textContent = "26";

		this._tilered27= document.createElement("div");
		this._tilered27.setAttribute("class","tile red");
		this._tilered27.textContent = "27";

		this._tilegreen28= document.createElement("div");
		this._tilegreen28.setAttribute("class","tile green");
		this._tilegreen28.textContent = "28";

		this._tilegreen29= document.createElement("div");
		this._tilegreen29.setAttribute("class","tile green");
		this._tilegreen29.textContent = "29";

		this._tilered30= document.createElement("div");
		this._tilered30.setAttribute("class","tile red");
		this._tilered30.textContent = "30";



		this._csscontainer.appendChild(this._blueRadio);
		this._csscontainer.appendChild(this._blueLabel);

		this._csscontainer.appendChild(this._redRadio);
		this._csscontainer.appendChild(this._redLabel);

		this._csscontainer.appendChild(this._greenRadio);
		this._csscontainer.appendChild(this._greenLabel);

		this._csscontainer.appendChild(this._resetRadio);
		this._csscontainer.appendChild(this._resetLabel);

		this._csscontainer.appendChild(this._tileblue1);
		this._csscontainer.appendChild(this._tilered2);
		this._csscontainer.appendChild(this._tileblue3);
		this._csscontainer.appendChild(this._tilegree4);
		this._csscontainer.appendChild(this._tilered5);
		this._csscontainer.appendChild(this._tileblue6);
		this._csscontainer.appendChild(this._tilered7);
		this._csscontainer.appendChild(this._tilegreen8);
		this._csscontainer.appendChild(this._tileblue9);
		this._csscontainer.appendChild(this._tilegreen10);

		this._csscontainer.appendChild(this._tilered11);
		this._csscontainer.appendChild(this._tilegreen12);
		this._csscontainer.appendChild(this._tileblue13);
		this._csscontainer.appendChild(this._tilegree14);
		this._csscontainer.appendChild(this._tileblue15);
		this._csscontainer.appendChild(this._tilegreeb16);
		this._csscontainer.appendChild(this._tilered17);
		this._csscontainer.appendChild(this._tilegreen18);
		this._csscontainer.appendChild(this._tileblue19);
		this._csscontainer.appendChild(this._tilegreen20);

		this._csscontainer.appendChild(this._tileblue21);
		this._csscontainer.appendChild(this._tilegreen22);
		this._csscontainer.appendChild(this._tilered23);
		this._csscontainer.appendChild(this._tilegree24);
		this._csscontainer.appendChild(this._tilered25);
		this._csscontainer.appendChild(this._tileblue26);
		this._csscontainer.appendChild(this._tilered27);
		this._csscontainer.appendChild(this._tilegreen28);
		this._csscontainer.appendChild(this._tilegreen29);
		this._csscontainer.appendChild(this._tilered30);

		this._container.appendChild(this._csscontainer);

	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}