import {Tabs, usePathname} from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Ionicons } from "@expo/vector-icons";

type TabConfig = {
    name: string;
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
}

const tabs: TabConfig[] = [
    {
        name: "index",
        title: "Home",
        icon: "home"
    },
    {
        name: "settings",
        title: "Settings",
        icon: "settings"
    },
    {
        name: "profile",
        title: "Profile",
        icon: "person"
    },
]

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#b3b3b3',
        headerShown: false,
        tabBarButton: HapticTab,
          tabBarStyle:{
            position: 'absolute',
            backgroundColor: 'transparent',
              borderTopColor: 'transparent',
              elevation: 0,
          },
      }}
    >

        {tabs.map((tab, index) => (
            <Tabs.Screen
                key={tab.name}
                name={tab.name}
                options={{
                    title: tab.title,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={tab.icon}
                            size={size ?? 28}
                            color={color}
                        />
                    ),
                }}
            />
        ))}
    </Tabs>
  );
}

