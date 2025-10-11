import ammo12gauge from "../assets/images/Ammo12gauge.webp";
import ammo44cal from "../assets/images/Ammo44cal.webp";
import ammo762x39 from "../assets/images/Ammo762x39.webp";
import ammo556x45 from "../assets/images/Ammo556x45.webp";
import ammo9x19 from "../assets/images/Ammo9x19.webp";

import a7 from "../assets/images/A7.webp";
import adrenaline from "../assets/images/Adrenaline.webp";
import ak from "../assets/images/AK.webp";
import antiCola from "../assets/images/Anti-SCP-207.webp";
import ciKeycard from "../assets/images/CIIcon.webp";
import coin from "../assets/images/Coin.webp";
import com15 from "../assets/images/COM-15.webp";
import com18 from "../assets/images/COM-18.webp";
import com45 from "../assets/images/COM-45.webp";
import combatArmor from "../assets/images/Combat-Armor.webp";
import containmentEngineer from "../assets/images/KeycardContainmentEngineer.webp";
import crossvec from "../assets/images/Crossvec.webp";
import disruptor from "../assets/images/ParticleDisruptor.webp";
import facilityManager from "../assets/images/KeycardFacilityManager.webp";
import firstAidKit from "../assets/images/First-Aid-Kit.webp";
import flashbang from "../assets/images/Flashbang.webp";
import flashlight from "../assets/images/Flashlight.webp";
import fr from "../assets/images/FR-MG-0.webp";
import fsp9 from "../assets/images/FSP-9.webp";
import guard from "../assets/images/KeycardGuard.webp";
import heavyArmor from "../assets/images/Heavy-Armor.webp";
import heg from "../assets/images/High-Explosive-Grenade.webp";
import jailbird from "../assets/images/Jailbird.webp";
import janitor from "../assets/images/KeycardJanitor.webp";
import lantern from "../assets/images/Lantern.webp";
import lightArmor from "../assets/images/Light-Armor.webp";
import logicer from "../assets/images/Logicer.webp";
import micro from "../assets/images/MicroHidIcon.webp";
import mtfCaptain from "../assets/images/KeycardMTFCaptain.webp";
import mtfE11 from "../assets/images/MTF-E11-SR.webp";
import mtfOperative from "../assets/images/KeycardMTFOperative.webp";
import mtfPrivate from "../assets/images/KeycardMTFPrivate.webp";
import o5 from "../assets/images/KeycardO5.webp";
import painkillers from "../assets/images/Painkillers.webp";
import radio from "../assets/images/Radio.webp";
import researchSupervisor from "../assets/images/KeycardResearchCoordinator.webp";
import revolver from "../assets/images/Revolver.webp";
import scientist from "../assets/images/KeycardScientist.webp";
import scp018 from "../assets/images/SCP-018.webp";
import scp127 from "../assets/images/SCP-127.webp";
import scp1344 from "../assets/images/SCP-1344.webp";
import scp1576 from "../assets/images/SCP-1576.webp";
import scp1853 from "../assets/images/SCP-1853.webp";
import scp207 from "../assets/images/SCP-207.webp";
import scp2176 from "../assets/images/SCP-2176.webp";
import scp244a from "../assets/images/SCP-244-A.webp";
import scp244b from "../assets/images/SCP-244-B.webp";
import scp268 from "../assets/images/SCP-268.webp";
import scp500 from "../assets/images/SCP-500.webp";
import shotgun from "../assets/images/Shotgun.webp";
import surfaceAccess from "../assets/images/SurfaceAccessPass.webp";
import zoneManager from "../assets/images/KeycardZoneManager.webp";

export const itemImages: Record<string, string> = {
    "Janitor Keycard": janitor,
    "Scientist Keycard": scientist,
    "Research Supervisor Keycard": researchSupervisor,
    "Zone Manager Keycard": zoneManager,
    "Guard Keycard": guard,
    "MTF Private Keycard": mtfPrivate,
    "Containment Engineer Keycard": containmentEngineer,
    "MTF Operative Keycard": mtfOperative,
    "MTF Captain Keycard": mtfCaptain,
    "Facility Manager Keycard": facilityManager,
    "Chaos Insurgency Access Device": ciKeycard,
    "O5-level Keycard": o5,
    "Radio": radio,
    "COM-15": com15,
    "First Aid Kit": firstAidKit,
    "Flashlight": flashlight,
    "Micro H.I.D.": micro,
    "SCP-500": scp500,
    "SCP-207": scp207,
    "12/70 Buckshot Ammo": ammo12gauge,
    "MTF-E11-SR": mtfE11,
    "Crossvec": crossvec,
    "5.56x45mm Ammo": ammo556x45,
    "FSP-9": fsp9,
    "Logicer": logicer,
    "High-Explosive Grenade": heg,
    "Flashbang Grenade": flashbang,
    ".44 Mag Ammo": ammo44cal,
    "7.62x39mm Ammo": ammo762x39,
    "9x19mm Ammo": ammo9x19,
    "COM-18": com18,
    "SCP-018": scp018,
    "SCP-268": scp268,
    "Adrenaline": adrenaline,
    "Painkillers": painkillers,
    "Coin": coin,
    "Light Armor": lightArmor,
    "Combat Armor": combatArmor,
    "Heavy Armor": heavyArmor,
    ".44 Revolver": revolver,
    "AK": ak,
    "Shotgun": shotgun,
    "SCP-2176": scp2176,
    "SCP-244-A": scp244a,
    "SCP-244-B": scp244b,
    "SCP-1853": scp1853,
    "3-X Particle Disruptor": disruptor,
    "COM-45": com45,
    "SCP-1576": scp1576,
    "Jailbird": jailbird,
    "Anti-Cola": antiCola,
    "FR-MG-0": fr,
    "A7": a7,
    "Lantern": lantern,
    "SCP-1344": scp1344,
    "Surface Access Pass": surfaceAccess,
    "SCP-127": scp127
} as const;

export interface Item {
    type: ItemType;
    count: number;
}

export type ItemType = keyof typeof itemImages;
