export interface Prop {
    name: string;
    type: string;
    required: boolean;
    default?: string;
    description: string;
}
export interface Example {
    label: string;
    code: string;
}
export interface ComponentSpec {
    name: string;
    category: string;
    import: string;
    description: string;
    keywords: string[];
    props: Prop[];
    variants: string[];
    examples: Example[];
}
export declare const components: ComponentSpec[];
