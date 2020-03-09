import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProjectDashboardDb } from 'src/app/fake-db/dashboard-project';
import { AnalyticsDashboardDb } from 'src/app/fake-db/dashboard-analytics';
import { CalendarFakeDb } from 'src/app/fake-db/calendar';
import { ECommerceFakeDb } from 'src/app/fake-db/e-commerce';
import { AcademyFakeDb } from 'src/app/fake-db/academy';
import { MailFakeDb } from 'src/app/fake-db/mail';
import { ChatFakeDb } from 'src/app/fake-db/chat';
import { FileManagerFakeDb } from 'src/app/fake-db/file-manager';
import { ContactsFakeDb } from 'src/app/fake-db/contacts';
import { TodoFakeDb } from 'src/app/fake-db/todo';
import { ScrumboardFakeDb } from 'src/app/fake-db/scrumboard';
import { InvoiceFakeDb } from 'src/app/fake-db/invoice';
import { ProfileFakeDb } from 'src/app/fake-db/profile';
import { SearchFakeDb } from 'src/app/fake-db/search';
import { FaqFakeDb } from 'src/app/fake-db/faq';
import { KnowledgeBaseFakeDb } from 'src/app/fake-db/knowledge-base';
import { IconsFakeDb } from 'src/app/fake-db/icons';
import { ChatPanelFakeDb } from 'src/app/fake-db/chat-panel';
import { QuickPanelFakeDb } from 'src/app/fake-db/quick-panel';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'project-dashboard-projects' : ProjectDashboardDb.projects,
            'project-dashboard-widgets'  : ProjectDashboardDb.widgets,
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Calendar
            'calendar': CalendarFakeDb.data,

            // E-Commerce
            'e-commerce-products' : ECommerceFakeDb.products,
            'e-commerce-orders'   : ECommerceFakeDb.orders,

            // Academy
            'academy-categories': AcademyFakeDb.categories,
            'academy-courses'   : AcademyFakeDb.courses,
            'academy-course'    : AcademyFakeDb.course,

            // Mail
            'mail-mails'  : MailFakeDb.mails,
            'mail-folders': MailFakeDb.folders,
            'mail-filters': MailFakeDb.filters,
            'mail-labels' : MailFakeDb.labels,

            // Chat
            'chat-contacts': ChatFakeDb.contacts,
            'chat-chats'   : ChatFakeDb.chats,
            'chat-user'    : ChatFakeDb.user,

            // File Manager
            'file-manager': FileManagerFakeDb.files,

            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

            // Todo
            'todo-todos'  : TodoFakeDb.todos,
            'todo-filters': TodoFakeDb.filters,
            'todo-tags'   : TodoFakeDb.tags,

            // Scrumboard
            'scrumboard-boards': ScrumboardFakeDb.boards,

            // Invoice
            'invoice': InvoiceFakeDb.invoice,

            // Profile
            'profile-timeline'     : ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about'        : ProfileFakeDb.about,

            // Search
            'search': SearchFakeDb.search,

            // FAQ
            'faq': FaqFakeDb.data,

            // Knowledge base
            'knowledge-base': KnowledgeBaseFakeDb.data,

            // Icons
            'icons': IconsFakeDb.icons,

            // Chat Panel
            'chat-panel-contacts' : ChatPanelFakeDb.contacts,
            'chat-panel-chats': ChatPanelFakeDb.chats,
            'chat-panel-user': ChatPanelFakeDb.user,

            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
