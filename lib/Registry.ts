import { Attachment } from "@/definitions/Attachment";
import { CircuitBreaker } from "@/elements/CircuitBreaker";
import { CurrentTransformer } from "@/elements/CT";
import { Transformer } from "@/elements/Transfromer";
import { Element } from "@/definitions/Element";
import { Image } from "@/elements/Image"
import { Switch } from "../elements/Switch";
import { MergingControl } from "@/elements/Merging";
import { BayControl } from "@/elements/Bay";
import { IED } from "@/elements/IED";

export const Registry: Record <Attachment["shape"], Element> = {
    cb: new CircuitBreaker(),
    ct: new CurrentTransformer(),
    transformer: new Transformer(),
    image: new Image(),
    switch: new Switch(),
    merging: new MergingControl(),
    bay: new BayControl(),
    ied: new IED()
}