export default interface Props {
    page: {
        data: any[];
        url: {
            current: string;
            prev: string;
            next: string
        }
    }
}