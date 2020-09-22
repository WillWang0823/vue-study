import settings from '@/settings'

const pageTitle = settings.title

export function getPageTitle(compTitle) {
    if (compTitle) {
        return compTitle + '-' + pageTitle
    }
    return pageTitle
}
