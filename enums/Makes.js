import { genChevrolet } from "./EnumChevrolet";
import { genAudi } from "./EnumsAudi";
import { genBmw } from "./EnumsBmw";
import { genDodge } from "./EnumsDodge";
import { genFord } from "./EnumsFord";
import { genHonda } from "./EnumsHonda";
import { genHyundai } from "./EnumsHyundai";
import { genInfiniti } from "./EnumsInfinity";
import { genJeep } from "./EnumsJeep";
import { genKia } from "./EnumsKia";
import { genLandRover } from "./EnumsLandRover";
import { genLexus } from "./EnumsLexus";
import { genMazda } from "./EnumsMazda";
import { genMercedesBenz } from "./EnumsMercedesBenz";
import { genMitsubishi } from "./EnumsMitsubishi";
import { genNissan } from "./EnumsNissan";
import { genOpel } from "./EnumsOpel";
import { genPorsche } from "./EnumsPorsche";
import { genToyota } from "./EnumsToyota";
import { genVolkswagen } from "./EnumsVolkswagen";

export const gMakes = {};

export function genMakes() {
  genBmw(gMakes);
  genMercedesBenz(gMakes);
  genAudi(gMakes);
  genVolkswagen(gMakes);
  genPorsche(gMakes);
  genJeep(gMakes);
  genFord(gMakes);
  genDodge(gMakes);
  genChevrolet(gMakes);
  genToyota(gMakes);
  genNissan(gMakes);
  genHonda(gMakes);
  genMitsubishi(gMakes);
  genKia(gMakes);
  genHyundai(gMakes);
  genMazda(gMakes);
  genLexus(gMakes);
  genInfiniti(gMakes);
  genLandRover(gMakes);
  genOpel(gMakes);
}
// Immediately invoke
genMakes();
