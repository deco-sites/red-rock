import { useSection } from "deco/hooks/useSection.ts";

export interface Props {
    showMenu?: boolean;
}

export default function NavMenu({ showMenu }: Props) {

    if (showMenu) {
        return <div class="relative">
            <button
                hx-trigger="click"
                hx-get={useSection({ props: { showMenu: false } })}
                hx-swap="outerHTML"
            >
                <svg width="56px" height="56px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-three-dots-vertical fill-current text-secondary">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </button>
            <div class="absolute -bottom-10 left-0 flex justify-end w-full ">
                <div class="bg-primary">
                    Testando
                </div>
            </div>
        </div>
    }

    return <div class="relative">
        <button
            hx-trigger="click"
            hx-get={useSection({ props: { showMenu: true } })}
            hx-swap="outerHTML"
        >
            <svg width="56px" height="56px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-three-dots-vertical fill-current text-secondary">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        </button>
    </div>
}