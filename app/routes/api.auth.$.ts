import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router'
import { auth } from '../../auth.server'

export async function loader({ request }: LoaderFunctionArgs) {
    debugger;
    return auth.handler(request)
}

export async function action({ request }: ActionFunctionArgs) {
    debugger;
    return auth.handler(request)
}