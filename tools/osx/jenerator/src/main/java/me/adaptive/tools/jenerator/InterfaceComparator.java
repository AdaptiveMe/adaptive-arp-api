package me.adaptive.tools.jenerator;

import java.util.Comparator;

public class InterfaceComparator implements Comparator<Class> {

    @Override
    public int compare(Class o1, Class o2) {
        final Class c1 = (Class) o1;
        final Class c2 = (Class) o2;

        if (c1.getSimpleName().startsWith("Contact") || c2.getSimpleName().startsWith("Contact")) {
            System.out.println("Comparing: "+c1.getSimpleName()+" to "+c2.getSimpleName());
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
        if (c1.isInterface() && c2.isInterface()) {
            // Is there inheritance between these interfaces?
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

        // Reached here... don't know!
        //System.out.println(c1.getSimpleName()+" : "+c2.getSimpleName());

            /*
            if (c1.isAssignableFrom(c2)) {
                return -1;
            } else {
                if (!c2.isAssignableFrom(c2)) {
                    throw new IllegalArgumentException("The classes share no relation");
                }
                if (c1.isInterface() && !c2.isInterface()) {
                    return -1;
                }
                if (!c1.isInterface() && c2.isInterface()) {
                    return 1;
                }
                if (c1.isInterface() && c2.isInterface()) {
                    return c1.getName().compareTo(c2.getName());
                }

                if (!c1.isInterface() && !c2.isInterface()) {
                    if (c1.getSuperclass().equals(c2)) {
                        return -1;
                    } else {
                        return c1.getName().compareTo(c2.getName());
                    }
                }

                if (c1.getInterfaces().length == 1 && c2.getInterfaces().length == 1) {
                    return this.compare(c1.getInterfaces()[0], c2.getInterfaces()[0]);
                } else {
                    if (c1.getInterfaces().length > 1 && c2.getInterfaces().length == 0) {
                        return 1;
                    } else if (c1.getInterfaces().length == 0 && c2.getInterfaces().length > 1) {
                        return -1;
                    } else {
                        return 1;
                    }
                }

            }
            */
    }
}