import * as d3 from 'd3';
import { Attachment } from './Attachment';
import { Point } from './Point';
export interface Element {
    render(
        group: d3.Selection<SVGGElement, unknown, null, undefined>,
        attachment: Attachment,
        coord: Point
    ): void;
}