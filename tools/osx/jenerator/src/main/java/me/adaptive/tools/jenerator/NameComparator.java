package me.adaptive.tools.jenerator;

import java.util.Comparator;

/**
 * Created by clozano on 08/01/15.
 */
public class NameComparator implements Comparator<Class> {

    @Override
    public int compare(Class o1, Class o2) {
        final Class c1 = o1;
        final Class c2 = o2;

        return c1.getName().compareTo(c2.getName());
    }
}
