import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Flame,
  Bell,
  CheckCircle,
  Thermometer,
  Leaf,
  Droplets,
  BadgeInfo,
  ChevronLeft,
  ChevronRight,
  Home
} from 'lucide-angular';

interface MenuItem {
  id: string;
  icon: any;
  label: string;
  badge?: { count: number; type: string };
  status?: { text: string; type: string };
}

interface MenuSection {
  section: string;
  items: MenuItem[];
}

@Component({
  selector: 'maps-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './maps-sidebar.component.html',
  styleUrl: './maps-sidebar.component.scss'
})
export class MapsSidebarComponent {
  isCollapsed = false;
  activeItem = 'dashboard';

  readonly flameIcon = Flame;
  readonly bellIcon = Bell;
  readonly checkIcon = CheckCircle;
  readonly thermometerIcon = Thermometer;
  readonly leafIcon = Leaf;
  readonly dropIcon = Droplets;
  readonly settingsIcon = BadgeInfo;
  readonly homeIcon = Home;
  readonly chevronLeft = ChevronLeft;
  readonly chevronRight = ChevronRight;



  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  setActiveItem(id: string) {
    this.activeItem = id;
  }
}
