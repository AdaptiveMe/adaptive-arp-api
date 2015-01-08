package me.adaptive.tools.jenerator;

import java.util.Comparator;

public class InterfaceComparator implements Comparator<Class> {

    @Override
    public int compare(Class o1, Class o2) {
        final Class c1 = (Class) o1;
        final Class c2 = (Class) o2;

        if (c1.getSimpleName().startsWith("Contact") || c2.getSimpleName().startsWith("Contact")) {
            //System.out.println("Comparing: " + c1.getSimpleName() + " to " + c2.getSimpleName());
        }

        // Both are the same
        if (c1.equals(c2)) {
            return 0;
        }


        // Both Interfaces
        if (c1.isInterface() && c2.isInterface()) {
            // Is there inheritance between these interfaces?
            if (c1.isAssignableFrom(c2)) {
                return -1;
            } else {
                return 1;
            }
        }

        // Both Classes
        if (!c1.isInterface() && !c2.isInterface()) {
            // Is there inheritance between these classes?
            if (c1.isAssignableFrom(c2)) {
                return -1;
            } else {
                return 1;
            }
        }

        // Interfaces always go before classes.
        if (c1.isInterface() && !c2.isInterface()) {
            return 1;
        } else {
            return -1;
        }

    }
}