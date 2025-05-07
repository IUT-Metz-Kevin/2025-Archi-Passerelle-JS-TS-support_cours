let a = 3;

// a = "Chaine"ඞ;
console.log(a);

function addition(n1: number, n2: number): number {
  return n1 + n2;
}

const resultat = addition(1, 2);

const tab1: string[] = [];
const tab2: Array<string> = [];
const tab3 = ["Hello world", 1, true];

const voitureData: VoitureProps = {
  marque: "Audi",
  couleur: "rouge",
  isStillBuilt: true,
  modele: "A3",
  year: 2010,
  motor: {
    power: 200,
    type: "diesel",
  },
};

// Utilisation type alias
type VoitureProps = {
  marque: string;
  modele: string;
  couleur: string;
  year: number;
  isStillBuilt: boolean;
  motor: {
    power: number;
    type: string;
  };
};

class Voiture {
  constructor(private props: VoitureProps) {}

  getPower() {
    return this.props.motor.power;
  }
}

const maVoiture = new Voiture(voitureData);

// function doSomething(object: any) {
//   if (object instanceof Voiture) {
//     object.getPower();
//   }
// }

// Union type
type AdditionType = string | number;

// Intersection type
type VoitureWithWheels = VoitureProps & { wheels: number };

function addition2(n1: number, n2: string): AdditionType {
  return n1 + n2;
}

let voiture2: VoitureWithWheels = {
  marque: "Audi",
  couleur: "rouge",
  isStillBuilt: true,
  modele: "A3",
  year: 2010,
  motor: {
    power: 200,
    type: "diesel",
  },
  wheels: 4,
};

type VoiturePropsOptional = Partial<VoitureProps>; // Permet de créer un types où tous les champs du type deviennent optionnels
type VoiturePropsWithoutMotor = Omit<VoitureProps, "motor">; // Permet de créer un type qui omet cetaines propriétés
type VoitureBrand = Pick<VoitureProps, "marque" | "modele">; // Permet de "piquer" des paramètres d'un autre type dans un nouveau type
type AdditionReturnType = ReturnType<typeof addition>; // Permet de récupérer un type de retour d'un objet / d'une fonction etc.

const voiture3: VoiturePropsOptional = {
  marque: "Audi",
  year: 2010,
};

// On peut faire pareil avec interface
interface Voiture {
  marque: string;
  modele: string;
  couleur: string;
  year: number;
  isStillBuilt: boolean;
  motor: {
    power: number;
    type: string;
  };
}

interface VehicleBehavior {
  start(): void;
  getPower(): number;
}

class Moto implements VehicleBehavior {
  start(): void {
    console.log("Allumage d'une moto en tournant la clé");
  }
  getPower(): number {
    throw new Error("Method not implemented.");
  }
}

class Tesla implements VehicleBehavior {
  start(): void {
    console.log("Allumage d'une Tesla en appuyant sur le bouton start");
  }
  getPower(): number {
    throw new Error("Method not implemented.");
  }
}

function runVehicle(vehicle: VehicleBehavior) {
  vehicle.start();
}

runVehicle(new Moto());
runVehicle(new Tesla());
